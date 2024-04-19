import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import OnlineStoreContext from '../context/OnlineStoreContext';
import { renderWithRouter } from './utils/renderWithRouter';
import store from '../redux';
import mockContextValues from './mocks/mockContextValues';
import PixModal from '../components/Modals/PixModal';

describe('Testes do PixModal', () => {
  test('Testa o PixModal', async () => {
    const pixOpen = true;
    const setPixOpen = vi.fn();
    const { user } = renderWithRouter(
      <OnlineStoreContext.Provider value={ mockContextValues }>
        <Provider store={ store }>
          <PixModal pixOpen={ pixOpen } setPixOpen={ setPixOpen } />
        </Provider>
      </OnlineStoreContext.Provider>,
      { route: '/checkout' },
    );

    const qrCodeImg = screen.getByLabelText('qrCodeImg');
    const closeModalBtn = screen.getByLabelText('closeModalBtn');

    expect(qrCodeImg).toBeInTheDocument();
    expect(closeModalBtn).toBeInTheDocument();

    await user.click(closeModalBtn);
  });
});
