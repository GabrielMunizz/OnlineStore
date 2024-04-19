import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import PaymentSuccess from '../pages/PaymentSuccess';
import { mockBuyerInfoCred, mockBuyerInfoPix } from './mocks/mockBuyerInfo';

describe('Testes do PaymentSucces', () => {
  test('Testa se é possivel voltar para a página principal', async () => {
    localStorage.setItem('buyerInfo', JSON.stringify(mockBuyerInfoCred));
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <PaymentSuccess />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/success' },
    );

    const backToHomeBtn = screen.getByLabelText('backToHomeBtn');

    expect(backToHomeBtn).toBeInTheDocument();

    await user.click(backToHomeBtn);
  });

  test('Testa se consegue clicar no botão de abrir o QR Code caso o cliente tenha escolhido PIX como pagamento', async () => {
    localStorage.setItem('buyerInfo', JSON.stringify(mockBuyerInfoPix));
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <PaymentSuccess />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/success' },
    );

    const pixModalBtn = screen.getByLabelText('pixModalBtn');

    expect(pixModalBtn).toBeInTheDocument();

    await user.click(pixModalBtn);
  });
});
