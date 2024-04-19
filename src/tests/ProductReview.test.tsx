import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { expect, vi } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import ProductDetails from '../pages/ProductDetails';
import mockProductDetails from './mocks/mockProductDetails';
import mockUser from './mocks/mockUser';

describe('Testes do ProductReview', () => {
  const defaultText = 'Não possui avaliações. Seja o primeiro a avaliar!';

  test('Testa se o ProductReview é renderizado corretamente', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockProductDetails,
    } as Response;

    const fetchspy = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <ProductDetails />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: `/productDetails/${mockProductDetails.id}` },

    );

    const reviewBtn = await screen.findByLabelText('reviewBtn');
    const defaultMessage = await screen.findByLabelText('noReviewDefaultMessage');

    expect(window.location.pathname).toBe('/productDetails/MLB4100536904');
    expect(fetchspy).toHaveBeenCalled();
    expect(reviewBtn).toBeInTheDocument();
    expect(defaultMessage).toBeInTheDocument();
    expect(defaultMessage).toHaveTextContent(defaultText);
  });

  test('Testa se é possivel adicionar um review e depois deletar', async () => {
    localStorage.setItem('user', JSON.stringify(mockUser));

    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockProductDetails,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <ProductDetails />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: `/productDetails/${mockProductDetails.id}` },

    );

    const reviewBtn = await screen.findByLabelText('reviewBtn');
    const defaultMessage = await screen.findByLabelText('noReviewDefaultMessage');

    expect(defaultMessage).toBeInTheDocument();
    expect(defaultMessage).toHaveTextContent(defaultText);

    await user.click(reviewBtn);

    const submitReviewBtn = await screen.findByLabelText('submitReviewBtn');
    const cancelReviewBtn = await screen.findByLabelText('cancelReviewBtn');
    const reviewTextArea = await screen.findByLabelText('reviewTextArea');
    const starRatingBtns = await screen.findAllByLabelText('starRatingBtn');

    expect(submitReviewBtn).toBeInTheDocument();
    expect(cancelReviewBtn).toBeInTheDocument();
    expect(reviewTextArea).toBeInTheDocument();
    expect(starRatingBtns).toHaveLength(5);

    await user.type(reviewTextArea, 'Muito bom!');
    await user.click(starRatingBtns[4]);
    await user.click(submitReviewBtn);

    const userReviewTxt = await screen.findByLabelText('userReviewTxt');

    expect(userReviewTxt).toBeInTheDocument();
    expect(userReviewTxt).toHaveTextContent('Muito bom!');

    const deleteReviewBtn = await screen.findByLabelText('deleteReviewBtn');

    expect(deleteReviewBtn).toBeInTheDocument();

    await user.click(deleteReviewBtn);
    expect(userReviewTxt).not.toBeInTheDocument();
  });

  test('Testa se ao clicar em avaliar e depois no botão de cancelar, o botão "Avaliar" volta a aparecer na tela', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockProductDetails,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <ProductDetails />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: `/productDetails/${mockProductDetails.id}` },

    );

    const reviewBtn = await screen.findByLabelText('reviewBtn');
    const defaultMessage = await screen.findByLabelText('noReviewDefaultMessage');

    expect(reviewBtn).toBeInTheDocument();
    expect(defaultMessage).toBeInTheDocument();
    expect(defaultMessage).toHaveTextContent(defaultText);

    await user.click(reviewBtn);

    const submitReviewBtn = await screen.findByLabelText('submitReviewBtn');
    const cancelReviewBtn = await screen.findByLabelText('cancelReviewBtn');

    expect(submitReviewBtn).toBeInTheDocument();
    expect(cancelReviewBtn).toBeInTheDocument();

    await user.click(cancelReviewBtn);

    expect(reviewBtn).toBeInTheDocument();
  });

  test('Testa se ao clicar em "Avaliar" sem estar logado, aparece um alerta na tela', async () => {
    const notLoggdUser = [
      {
        email: 'teste@teste.com',
        lastName: 'Teste',
        logged: false,
        name: 'User',
        userName: 'Testando',
      },
    ];

    localStorage.setItem('user', JSON.stringify(notLoggdUser));

    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockProductDetails,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <ProductDetails />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: `/productDetails/${mockProductDetails.id}` },

    );

    const reviewBtn = await screen.findByLabelText('reviewBtn');
    const defaultMessage = await screen.findByLabelText('noReviewDefaultMessage');

    expect(defaultMessage).toBeInTheDocument();
    expect(defaultMessage).toHaveTextContent(defaultText);

    await user.click(reviewBtn);

    const alert = await screen.findByText('Você precisa estar logado para avaliar');

    expect(alert).toBeInTheDocument();
  });
});
