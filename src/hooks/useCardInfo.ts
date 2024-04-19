import { useReducer } from 'react';
import { CardAction, CardInfoType } from '../utils/types';

const useCardInfo = () => {
  const initialState: CardInfoType = {
    cardOwner: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  };

  const cardReducer = (state = initialState, action: CardAction) => {
    switch (action.type) {
      case 'UPDATE':
        return {
          ...state,
          [action.name]: action.value,
        };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  return {
    cardInfo: state,
    cardInfoDispatch: dispatch,
  };
};

export default useCardInfo;
