import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { renderWithRouter } from './utils/renderWithRouter';
import Home from '../pages/Home';
import store from '../redux';
import mockCategories from './mocks/mockCategories';
import OnlineStoreContext from '../context/OnlineStoreContext';
import mockContextValues from './mocks/mockContextValues';

describe('Testes do componenete Categories', () => {
  test('Testa se as categorias são renderizadas', async () => {
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => mockCategories,
    } as Response;

    const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <Home />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/' },
    );

    const agroCategories = await screen.findAllByLabelText('Agro');
    const animaisCategories = await screen.findAllByLabelText('Animais');
    const allCategoriesBtns = await screen.findAllByLabelText('allCategoriesBtn');

    expect(fetchSpy).toHaveBeenCalled();
    expect(agroCategories[1]).toBeInTheDocument();
    expect(animaisCategories[1]).toBeInTheDocument();
    expect(allCategoriesBtns[1]).toBeInTheDocument();

    await user.click(agroCategories[1]);

    expect(mockContextValues.setCategoryName).toHaveBeenCalled();
    expect(mockContextValues.setCategoryID).toHaveBeenCalled();

    await user.click(allCategoriesBtns[1]);

    expect(mockContextValues.setCategoryName).toHaveBeenCalled();
    expect(mockContextValues.setCategoryID).toHaveBeenCalled();
  });
});
