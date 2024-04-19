import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import App from '../App';
import CartProducts from '../components/Products/CartProducts';
import { mockCart } from './mocks/mockCart';

describe('Testes do Cart', () => {
  test('Testa se o carrinho estiver vazio, o componente Cart é renderizado corretamente e o botão de voltar para página principal funciona', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <App />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/cart' },

    );
    const message = screen.getByText('Seu carrinho está vazio.');
    const backToHomeBtn = screen.getByLabelText('backToHomeBtn');

    expect(message).toBeInTheDocument();
    expect(backToHomeBtn).toBeInTheDocument();

    await user.click(backToHomeBtn);

    expect(window.location.pathname).toBe('/');
  });

  test('Testa se os produtos são renderizados no carrinho corretamente', async () => {
    renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <CartProducts product={ mockCart[0] } />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/cart' },
    );

    const productTitle = await screen.findByLabelText('productTitle');
    const removeQuantityBtn = await screen.findByLabelText('removeQuantityBtn');
    const addQuantityBtn = await screen.findByLabelText('addQuantityBtn');
    const removeFromCartBtn = await screen.findByLabelText('removeFromCartBtn');

    expect(productTitle).toHaveTextContent('Mock de produto');
    expect(removeQuantityBtn).toBeInTheDocument();
    expect(addQuantityBtn).toBeInTheDocument();
    expect(removeFromCartBtn).toBeInTheDocument();
  });

  test('Testa se é possivel aumentar ou diminuir a quantidade de unidades do produto no carrinho e remover o produto', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <CartProducts product={ mockCart[0] } />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/cart' },
    );

    const productQuantity = await screen.findByLabelText('productQuantity');
    const removeQuantityBtn = await screen.findByLabelText('removeQuantityBtn');
    const addQuantityBtn = await screen.findByLabelText('addQuantityBtn');
    const removeFromCartBtn = await screen.findByLabelText('removeFromCartBtn');

    await user.click(addQuantityBtn);
    await user.click(removeQuantityBtn);

    expect(productQuantity).toHaveTextContent('1');

    await user.click(removeFromCartBtn);
  });
});
