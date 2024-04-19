import { screen, waitFor } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { expect, vi } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import Login from '../pages/Login';
import App from '../App';

describe('Testes do Login', () => {
  test('Testa se a página de login renderiza corretamente', () => {
    renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <Login />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/login' },

    );

    const loginInput = screen.getByLabelText('loginInput');
    const loginPassInput = screen.getByLabelText('loginPassInput');
    const loginSubmitBtn = screen.getByLabelText('loginSubmitBtn');

    expect(loginInput).toBeInTheDocument();
    expect(loginPassInput).toBeInTheDocument();
    expect(loginSubmitBtn).toBeInTheDocument();
  });

  test('Testa se tentar fazer login com username não cadastrado, aparece um alerta', async () => {
    const notLoggedUser = [
      {
        email: 'teste@teste.com',
        lastName: 'Teste',
        logged: false,
        name: 'User',
        userName: 'Testando',
      },
    ];

    localStorage.setItem('user', JSON.stringify(notLoggedUser));

    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <App />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/login' },
    );

    const loginInput = screen.getByLabelText('loginInput');
    const loginPassInput = screen.getByLabelText('loginPassInput');
    const loginSubmitBtn = screen.getByLabelText('loginSubmitBtn');

    await user.type(loginInput, 'Inválido');
    await user.type(loginPassInput, '12345678');

    await user.click(loginSubmitBtn);

    const alert = await screen.findByText('Nome de usuário não encontrado!');

    expect(alert).toBeInTheDocument();
  });

  test('Testa se é possivel fazer login', async () => {
    const notLoggedUser = [
      {
        email: 'teste@teste.com',
        lastName: 'Teste',
        logged: false,
        name: 'User',
        userName: 'Testando',
      },
    ];

    localStorage.setItem('user', JSON.stringify(notLoggedUser));

    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <App />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/login' },
    );

    const loginInput = screen.getByLabelText('loginInput');
    const loginPassInput = screen.getByLabelText('loginPassInput');
    const loginSubmitBtn = screen.getByLabelText('loginSubmitBtn');

    await user.type(loginInput, 'Testando');
    await user.type(loginPassInput, '12345678');

    await user.click(loginSubmitBtn);

    const alert = await screen.findByText('Seja bem-vindo Testando!');

    expect(alert).toBeInTheDocument();

    vi.useFakeTimers();
    vi.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });

    vi.clearAllTimers();
  });
});
