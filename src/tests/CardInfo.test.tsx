import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { renderHook } from '@testing-library/react';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import CardInfo from '../components/Forms/CardInfo';
import useCardInfo from '../hooks/useCardInfo';

describe('Testes do CardInfo', () => {
  test('Testa se todos os elementos de CardInfo são renderizados corretamente', () => {
    const { result } = renderHook(() => useCardInfo());
    const { cardInfo, cardInfoDispatch } = result.current;
    renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <CardInfo
            cardInfo={ cardInfo }
            cardInfoDispatch={ cardInfoDispatch }
          />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/checkout' },
    );

    const visaImg = screen.getByLabelText('visaImg');
    const masterImg = screen.getByLabelText('masterImg');
    const dinersImg = screen.getByLabelText('dinersImg');
    const amexImg = screen.getByLabelText('amexImg');
    const discoverImg = screen.getByLabelText('discoverImg');

    const cardOwnerInput = screen.getByLabelText('cardOwnerInput');
    const cardNumberInput = screen.getByLabelText('cardNumberInput');
    const expirationInput = screen.getByLabelText('expirationInput');
    const cvcInput = screen.getByLabelText('cvcInput');

    expect(visaImg).toBeInTheDocument();
    expect(masterImg).toBeInTheDocument();
    expect(dinersImg).toBeInTheDocument();
    expect(amexImg).toBeInTheDocument();
    expect(discoverImg).toBeInTheDocument();

    expect(cardOwnerInput).toBeInTheDocument();
    expect(cardNumberInput).toBeInTheDocument();
    expect(expirationInput).toBeInTheDocument();
    expect(cvcInput).toBeInTheDocument();
  });

  test('Testa se é possivel digitar nos inputs', async () => {
    const { result } = renderHook(() => useCardInfo());
    const { cardInfo, cardInfoDispatch } = result.current;
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <CardInfo
            cardInfo={ cardInfo }
            cardInfoDispatch={ cardInfoDispatch }
          />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/checkout' },
    );

    const cardOwnerInput = screen.getByLabelText('cardOwnerInput');
    const cardNumberInput = screen.getByLabelText('cardNumberInput');
    const expirationInput = screen.getByLabelText('expirationInput');
    const cvcInput = screen.getByLabelText('cvcInput');

    await user.type(cardOwnerInput, 'Teste');
    await user.type(cardNumberInput, '4412345678945612');
    await user.type(expirationInput, '12/2024');
    await user.type(cvcInput, '123');
  });
});
