import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import useCardInfo from '../hooks/useCardInfo';

import useIndex from '../hooks/useIndex';

describe('Testes dos custom hooks', () => {
  test('Testa o useCardInfo', () => {
    const { result } = renderHook(() => useCardInfo());
    const { cardInfoDispatch } = result.current;

    act(() => cardInfoDispatch({ type: 'RESET' }));

    expect(result.current.cardInfo).toEqual(
      {
        cardOwner: '',
        cardNumber: '',
        expirationDate: '',
        cvc: '',
      },
    );
  });

  test('Testa o useIndex', async () => {
    const mockPictures = [
      { id: '1', url: 'someUrl' },
      { id: '2', url: 'someUrl' },
      { id: '3', url: 'someUrl' },
    ];
    const { result } = renderHook(() => useIndex(mockPictures));

    act(() => result.current.handleNext());

    expect(result.current.index).toBe(1);

    act(() => result.current.handlePrevious());

    expect(result.current.index).toBe(0);
  });
});
