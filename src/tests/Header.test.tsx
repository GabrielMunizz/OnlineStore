import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { renderWithRouter } from './utils/renderWithRouter';
import Home from '../pages/Home';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import OnlineStoreContext from '../context/OnlineStoreContext';
import App from '../App';
import mockUser from './mocks/mockUser';

describe('Testes do Header', () => {
  test('Testa se o Header é renderizado corretamente', () => {
    renderWithRouter(
      <Provider store={ store }>
        <Home />
      </Provider>,
      { route: '/' },
    );

    const headerLogos = screen.getAllByRole('img');
    const carts = screen.getAllByLabelText('cartBtn');
    const searchInputs = screen.getAllByLabelText('searchInput');
    const loginBtns = screen.getAllByLabelText('loginBtn');
    const signUpBtns = screen.getAllByLabelText('signUpBtn');

    expect(headerLogos[0]).toBeInTheDocument();
    expect(carts[0]).toBeInTheDocument();
    expect(loginBtns[0]).toBeInTheDocument();
    expect(signUpBtns[0]).toBeInTheDocument();
    expect(searchInputs[0]).toBeInTheDocument();
  });

  test('Testa se escrever no input, e clicar no botão, as funções referentes são invocadas', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <Home />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/' },
    );
    const searchInputs = screen.getAllByLabelText('searchInput');
    const searchBtns = screen.getAllByLabelText('searchBtn');

    await user.type(searchInputs[0], 'teste');
    await user.click(searchBtns[0]);

    expect(mockContextValues.setQuery).toHaveBeenCalled();
  });

  test('Testa se clicar em "Login", é redirecionado para a página correta.', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <App />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/' },
    );

    const loginBtns = screen.getAllByLabelText('loginBtn');

    await user.click(loginBtns[0]);

    expect(window.location.pathname).toBe('/login');
  });

  test('Testa se clicar em "Cadastre-se aqui!", é redirecionado para a página correta.', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <App />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/' },
    );

    const signUpBtns = screen.getAllByLabelText('signUpBtn');

    await user.click(signUpBtns[0]);

    expect(window.location.pathname).toBe('/register');
  });

  test('Testa se o usuário já estiver logado, consegue fazer logout', async () => {
    localStorage.setItem('user', JSON.stringify(mockUser));
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <App />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/' },
    );

    const logoutBtns = screen.getAllByLabelText('logoutBtn');

    await user.click(logoutBtns[0]);

    const signUpBtns = screen.getAllByLabelText('signUpBtn');

    expect(signUpBtns[0]).toBeInTheDocument();
  });
});
