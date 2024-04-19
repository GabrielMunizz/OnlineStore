import { FetchedProductsType } from './types';

export const getProducts = (data: any) => {
  if (data) {
    return data.results as FetchedProductsType[];
  }
  return [];
};

export const getMercadoPago = (mercadoPago: boolean) => {
  if (mercadoPago) {
    return 'Sim';
  }
  return 'Não';
};

export const getStarColor = (currentRate: number, rating: number) => {
  if (currentRate <= rating) {
    return 'orange';
  }

  return 'grey';
};
