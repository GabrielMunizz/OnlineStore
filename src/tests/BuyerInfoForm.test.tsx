import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import BuyerInfoForm from '../components/Forms/BuyerInfoForm';
import useForm from '../hooks/useForm';

describe('Testes do BuyerInfoForm', () => {
  test('Testa se o formulário é renderizado corretamente', () => {
    const { result } = renderHook(() => useForm());
    const handlers = result.current;
    renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <BuyerInfoForm handlers={ handlers } />
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

    expect(fullNameInput).toBeInTheDocument();
    expect(cpfInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(cepInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(numInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(complementInput).toBeInTheDocument();
  });

  test('Testa se é possivel digitar nos inputs do form', async () => {
    const { result } = renderHook(() => useForm());
    const handlers = result.current;
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <BuyerInfoForm handlers={ handlers } />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/checkout' },
    );

    const fullNameInput = screen.getByLabelText('fullNameInput');
    const cpfInput = screen.getByLabelText('cpfInput');

    await user.type(fullNameInput, 'Teste');
    await user.type(cpfInput, '12345678910');
  });

  test('Testa se digitar todas as informações do cliente e clicar em "Concluir Pagamento", o pagamento é concluido', async () => {
    const { result } = renderHook(() => useForm());
    const handlers = result.current;
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <BuyerInfoForm handlers={ handlers } />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/checkout' },
    );

    const fullNameInput = screen.getByLabelText('fullNameInput');
    const cpfInput = screen.getByLabelText('cpfInput');

    await user.type(fullNameInput, 'Teste');
    await user.type(cpfInput, '12345678910');
  });
});
