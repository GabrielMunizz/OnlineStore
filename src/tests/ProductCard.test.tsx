import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import Products from '../components/Products/Products';
import mockProducts from './mocks/mockProducts';

describe('Testes do componente ProductCard', () => {
  test('Testa se os cards de produtos são renderizados corretamente', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockProducts,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
    const { user } = renderWithRouter(
      <Provider store={ store }>
        <Products />
      </Provider>,
      { route: '/' },
    );

    const productTitle = await screen.findAllByLabelText('productTitle');
    const addToCartBtns = screen.getAllByLabelText('addToCartBtn');
    const producDetailsBtns = screen.getAllByLabelText('producDetailsBtn');

    expect(productTitle).toHaveLength(2);
    expect(productTitle[0]).toHaveTextContent('Luva Lança Teia Homem Aranha Brinquedo Presente Meninos Top');
    expect(addToCartBtns[0]).toBeInTheDocument();
    expect(producDetailsBtns[0]).toBeInTheDocument();
    expect(addToCartBtns).toHaveLength(2);
    expect(producDetailsBtns).toHaveLength(2);

    await user.click(addToCartBtns[0]);
    await user.click(producDetailsBtns[0]);
  });
});
