import { FetchedProductsType } from './types';

const calculateQuantity = (cart: FetchedProductsType[]) => {
  const quatityArr = cart.map((product) => {
    if (product.quantity) {
      return product.quantity;
    }
    return 0;
  });
  const total = quatityArr.reduce((acc, cur) => {
    if (acc && cur) {
      const sum = acc + cur;
      return sum;
    }
    return cur;
  }, 0);

  return total;
};

export default calculateQuantity;
