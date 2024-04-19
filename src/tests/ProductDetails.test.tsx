import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import ProductDetails from '../pages/ProductDetails';
import mockProductDetails from './mocks/mockProductDetails';

describe('Testes do ProductDetails', () => {
  test('Testa se as informações do produto são renderizadas corretamente', async () => {
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

    const productTitle = await screen.findByLabelText('title');
    const productImage = await screen.findByLabelText('productImage');
    const previousPictureBtn = await screen.findByLabelText('previousPictureBtn');
    const nextPictureBtn = await screen.findByLabelText('nextPictureBtn');
    const addToCartBtn = await screen.findByLabelText('addToCartBtn');
    const backToHomeBtn = await screen.findByLabelText('backToHomeBtn');
    const mercadoPagoP = await screen.findByLabelText('mercadoPagoP');

    expect(window.location.pathname).toBe('/productDetails/MLB4100536904');
    expect(fetchspy).toHaveBeenCalled();
    expect(productTitle).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(previousPictureBtn).toBeInTheDocument();
    expect(nextPictureBtn).toBeInTheDocument();
    expect(addToCartBtn).toBeInTheDocument();
    expect(backToHomeBtn).toBeInTheDocument();
    expect(mercadoPagoP).toBeInTheDocument();
    expect(mercadoPagoP).toHaveTextContent('Mercado pago: Sim');
  });

  test('Testa se é o botão de adicionar ao carrinho funciona corretamente', async () => {
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

    const addToCartBtn = await screen.findByLabelText('addToCartBtn');
    await user.click(addToCartBtn);

    expect(addToCartBtn).toBeInTheDocument();
  });

  test('Testa se o botão de voltar para a pagina princpal funciona corretamente', async () => {
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

    const backToHomeBtn = await screen.findByLabelText('backToHomeBtn');
    await user.click(backToHomeBtn);

    expect(backToHomeBtn).toBeInTheDocument();
  });

  test('Testa se os botões de mudar a imagem funcionam corretamente', async () => {
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

    const previousPictureBtn = await screen.findByLabelText('previousPictureBtn');
    const nextPictureBtn = await screen.findByLabelText('nextPictureBtn');

    await user.click(previousPictureBtn);
    await user.click(nextPictureBtn);

    expect(previousPictureBtn).toBeInTheDocument();
    expect(nextPictureBtn).toBeInTheDocument();
  });
});
