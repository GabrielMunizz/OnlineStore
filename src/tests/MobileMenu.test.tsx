import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import MobileMenu from '../components/MobileMenu/MobileMenu';

describe('Testes do MobileMenu', () => {
  test('Testa se o botão do menu é renderizado e se ao clicar nele o menu é aberto', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <MobileMenu />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/' },
    );

    const mobileMenuBtn = screen.getByLabelText('mobileMenuBtn');

    expect(mobileMenuBtn).toBeInTheDocument();

    await user.click(mobileMenuBtn);

    expect(mockContextValues.setIsOpen).toHaveBeenCalled();
  });
 
});
