import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import CartDropDown from '../components/CartDropDown/CartDropDown';

describe('Testes do CartDropDown', () => {
  test('Testa se o botão do menu é renderizado e se é possivel clicar nele', async () => {
    const handleCheckoutSpy = vi.fn();
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <CartDropDown
            productQuantity={ 2 }
            total="99.0"
            handleCheckout={ handleCheckoutSpy }
          />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/cart' },
    );

    const menuBtn = screen.getByLabelText('menuBtn');

    expect(menuBtn).toBeInTheDocument();

    await user.click(menuBtn);
  });
});
