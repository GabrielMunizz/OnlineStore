export const RESET_CART = 'RESET_CART';

const resetCart = (payload: []) => ({
  type: RESET_CART,
  payload,
});

export default resetCart;
