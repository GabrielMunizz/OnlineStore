import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { expect } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import RegisterUser from '../pages/RegisterUser';

describe('Testes do RegisterUser', () => {
  test('Testa se a página de cadastro de usuário renderiza corretamente', () => {
    renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <RegisterUser />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/register' },

    );

    const usernameInput = screen.getByLabelText('usernameInput');
    const nameInput = screen.getByLabelText('nameInput');
    const lastNameInput = screen.getByLabelText('lastNameInput');
    const emailInput = screen.getByLabelText('emailInput');
    const passwordInput = screen.getByLabelText('passwordInput');
    const confirmPasswordInput = screen.getByLabelText('confirmPasswordInput');

    expect(usernameInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  test('Testa se é possivel fazer cadastro', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <RegisterUser />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/register' },

    );

    const usernameInput = screen.getByLabelText('usernameInput');
    const nameInput = screen.getByLabelText('nameInput');
    const lastNameInput = screen.getByLabelText('lastNameInput');
    const emailInput = screen.getByLabelText('emailInput');
    const passwordInput = screen.getByLabelText('passwordInput');
    const confirmPasswordInput = screen.getByLabelText('confirmPasswordInput');
    const submitBtn = screen.getByLabelText('submitBtn');

    await user.type(usernameInput, 'Teste');
    await user.type(nameInput, 'Teste');
    await user.type(lastNameInput, 'Testando');
    await user.type(emailInput, 'teste@teste.com');
    await user.type(passwordInput, '12345678');
    await user.type(confirmPasswordInput, '12345678');
    await user.click(submitBtn);
  });

  test('Testa se ao clicar em cancelar, sai da página', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <RegisterUser />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/register' },

    );

    const cancelBtn = screen.getByLabelText('cancelBtn');

    await user.click(cancelBtn);
  });
});
