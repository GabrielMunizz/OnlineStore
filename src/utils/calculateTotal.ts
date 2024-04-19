import { FetchedProductsType } from './types';

const calculateTotal = (cart: FetchedProductsType[]) => {
  const priceArr = cart.map((product) => {
    if (product.quantity) {
      return product.price * product.quantity;
    }
    return 0;
  });
  const total = priceArr.reduce((acc, cur) => {
    if (acc && cur) {
      const sum = acc + cur;
      return sum;
    }
    return cur;
  }, 0);

  return total;
};

export default calculateTotal;
