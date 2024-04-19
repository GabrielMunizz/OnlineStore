import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import CartAside from '../components/CartAside/CartAside';

describe('Testes do CartAside', () => {
  test('Testa se o componente CartAside é renderizado corretamente', () => {
    const handleCheckoutSpy = vi.fn();
    renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <CartAside
            productQuantity={ 2 }
            total="99.0"
            handleCheckout={ handleCheckoutSpy }
          />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/cart' },
    );

    const quantity = screen.getByLabelText('quantity');
    const total = screen.getByLabelText('total');
    const checkoutBtn = screen.getByLabelText('checkoutBtn');
    const backToHomeBtn = screen.getByLabelText('backToHomeBtn');

    expect(quantity).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(checkoutBtn).toBeInTheDocument();
    expect(backToHomeBtn).toBeInTheDocument();

    expect(quantity).toHaveTextContent('Quantidade de produtos: 2');
    expect(total).toHaveTextContent('Total do carrinho: 99.0');
  });

  test('Testa se clicar no botão "Continuar comprando" funciona corretamente', async () => {
    const handleCheckoutSpy = vi.fn();
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <CartAside
            productQuantity={ 2 }
            total="99.0"
            handleCheckout={ handleCheckoutSpy }
          />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/cart' },
    );

    const backToHomeBtn = screen.getByLabelText('backToHomeBtn');

    await user.click(backToHomeBtn);
  });

  test('Testa se clicar no botão "Finalizar compra" a função de checkout é invocada', async () => {
    const handleCheckoutSpy = vi.fn();
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <CartAside
            productQuantity={ 2 }
            total="99.0"
            handleCheckout={ handleCheckoutSpy }
          />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/cart' },
    );

    const checkoutBtn = screen.getByLabelText('checkoutBtn');

    await user.click(checkoutBtn);

    expect(handleCheckoutSpy).toHaveBeenCalled();
  });
});
