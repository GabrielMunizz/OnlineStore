import { screen, waitFor } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import App from '../App';

describe('Teste do Checkout', () => {
  test('Testa se digitar todas as informações do cliente e clicar em "Concluir Pagamento", é redirecionado para a rota /success', async () => {
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <App />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/checkout' },
    );

    const fullNameInput = screen.getByLabelText('fullNameInput');
    const cpfInput = screen.getByLabelText('cpfInput');
    const emailInput = screen.getByLabelText('emailInput');
    const phoneInput = screen.getByLabelText('phoneInput');
    const cepInput = screen.getByLabelText('cepInput');
    const addressInput = screen.getByLabelText('addressInput');
    const complementInput = screen.getByLabelText('complementInput');
    const numInput = screen.getByLabelText('numInput');
    const cityInput = screen.getByLabelText('cityInput');
    const stateInput = screen.getByLabelText('stateInput');

    const payBtn = screen.getByLabelText('payBtn');

    await user.type(fullNameInput, 'Teste Testando');
    await user.type(cpfInput, '12345678910');
    await user.type(emailInput, 'teste@teste.com');
    await user.type(phoneInput, '999999999');
    await user.type(cepInput, '33333333');
    await user.type(addressInput, 'Rua dos Alfeneiros');
    await user.type(complementInput, 'Casa');
    await user.type(numInput, '4');
    await user.type(cityInput, 'Juiz de Fora');
    await user.type(stateInput, 'MG');

    await user.click(payBtn);

    vi.useFakeTimers();

    vi.advanceTimersByTime(2500);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/success');
    });

    vi.clearAllTimers();
  });
});
