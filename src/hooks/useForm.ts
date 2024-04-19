import { useReducer } from 'react';
import { BuyerInfoType, FormAction } from '../utils/types';

const useForm = () => {
  const FILL_FORM = 'FILL_FORM';
  const initialState = {
    fullName: '',
    CPF: '',
    email: '',
    phone: '',
    CEP: '',
    address: '',
    complement: '',
    num: 0,
    city: '',
    state: '',
    payingMethod: 'Boleto',
  } as BuyerInfoType;

  const formReducer = (state = initialState, action: FormAction) => {
    switch (action.type) {
      case FILL_FORM:
        return {
          ...state,
          [action.key]: action.value,
        };
      default:
        return state;
    }
  };

  const [buyerInfo, dispatch] = useReducer(formReducer, initialState);

  return {
    buyerInfo,
    dispatch,
    FILL_FORM,
  };
};

export default useForm;
