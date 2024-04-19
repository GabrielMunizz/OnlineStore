export type FetchAction =
  | { type: 'loading' }
  | { type: 'error'; payload: any }
  | { type: 'fetched'; payload: any };

export type FetchedCategories = {
  id: string;
  name: string;
};

export type FetchedProductsType = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  quantity?: number,
};

export type FetchedProductDetailsType = {
  title: string,
  price: number,
  pictures: [
    {
      id: string,
      url: string,
    },
  ],
  accepts_mercadopago: boolean,
  thumbnail: string,
  warranty: string,
};

export type CartAction =
| { type: 'ADD_TO_CART', payload: any }
| { type: 'REMOVE_PRODUCT', payload: any }
| { type: 'ADD_QUANTITY', payload: any }
| { type: 'REMOVE_QUANTITY', payload: any }
| { type: 'RESET_CART', payload: any };

export type ReduxType = {
  cart:[
    {
      id: string,
      title: string,
      thumbnail: string,
      price: number,
      quantity?: number,
    },
  ]
};

export type CartReducerType = {
  cart: any[],
};

export type PurchaseTotalType = {
  purchase: number[],
};

export type UserType = {
  name: string,
  lastName: string,
  email: string,
  userName: string,
  logged: boolean,
};

export type UserReviewType = {
  productID: string,
  userName: string,
  rating: number,
  productReview: string,
  createdAt: string,
  reviewID: string,
};

export type BuyerInfoType = {
  fullName: string,
  CPF: string,
  email: string,
  phone: string,
  CEP: string,
  address: string,
  complement: string,
  num: number,
  city: string,
  state: string,
  payingMethod: string,
};

export type FinalBuyerInfoType = {
  fullName: string,
  CPF: string,
  email: string,
  phone: string,
  CEP: string,
  address: string,
  complement: string,
  num: number,
  city: string,
  state: string,
  payingMethod: string,
  purchasedAt: string,
  cart: [],
  total: number,
};

export type FormAction = {
  type: string,
  key: string,
  value: string,
};

export type CardAction =
 | { type: 'UPDATE', name: string, value: string }
 | { type: 'RESET' };

export type CardInfoType = {
  cardOwner: string,
  cardNumber: string,
  expirationDate: string,
  cvc: string,
};

export type RegisterUserForm = {
  userName: string,
  name: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
};
