export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const removeProduct = (productID: string) => ({
  type: REMOVE_PRODUCT,
  payload: productID,
});

export default removeProduct;
