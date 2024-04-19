import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import useForm from '../hooks/useForm';
import PayingMethod from '../components/Forms/PayingMethod';

describe('Testes do PayingMethod', () => {
  test('Testa se todos os elementos do PayingMethod são renderizados', () => {
    const { result } = renderHook(() => useForm());
    const handlers = result.current;
    const setIsOpen = vi.fn();
    renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <PayingMethod handlers={ handlers } setIsOpen={ setIsOpen } />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/checkout' },
    );

    const payingMethodSelect = screen.getByLabelText('payingMethodSelect');
    const backToCartBtn = screen.getByLabelText('backToCartBtn');
    const payBtn = screen.getByLabelText('payBtn');

    expect(payingMethodSelect).toBeInTheDocument();
    expect(backToCartBtn).toBeInTheDocument();
    expect(payBtn).toBeInTheDocument();
  });

  test('Testa se é possivel selecionar um método de pagamento e clicar em "Concluir Pagamento"', async () => {
    const { result } = renderHook(() => useForm());
    const handlers = result.current;
    const setIsOpen = vi.fn();
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <PayingMethod handlers={ handlers } setIsOpen={ setIsOpen } />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/checkout' },
    );

    const payingMethodSelect = screen.getByLabelText('payingMethodSelect');

    expect(payingMethodSelect).toBeInTheDocument();

    await user.selectOptions(payingMethodSelect, 'Boleto');

    const payBtn = screen.getByLabelText('payBtn');

    await user.click(payBtn);
  });
});
