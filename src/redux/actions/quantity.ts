export const ADD_QUANTITY = 'ADD_QUANTITY';
export const addQuantity = (productID: string) => ({
  type: ADD_QUANTITY,
  payload: productID,
});

export const REMOVE_QUANTITY = 'REMOVE_QUANTITY';
export const removeQuantity = (productID: string) => ({
  type: REMOVE_QUANTITY,
  payload: productID,
});
