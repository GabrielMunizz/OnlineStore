import { FetchedProductsType } from '../../utils/types';

export const ADD_TO_CART = 'ADD_TO_CART';
const addToCart = (payload: FetchedProductsType) => ({
  type: ADD_TO_CART,
  payload,
});

export default addToCart;
