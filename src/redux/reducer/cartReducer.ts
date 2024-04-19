import { ADD_TO_CART } from '../actions/addToCart';
import { REMOVE_PRODUCT } from '../actions/removeFromCart';
import { ADD_QUANTITY, REMOVE_QUANTITY } from '../actions/quantity';
import { RESET_CART } from '../actions/resetCart';
import { CartReducerType, CartAction } from '../../utils/types';

const INITIAL_STATE: CartReducerType = {
  cart: [],
};

const addItem = (state = INITIAL_STATE, action: CartAction) => {
  const { id } = action.payload;
  const existingItem = state.cart.find((item) => item.id === id);

  if (existingItem) {
    const updatedCart = state.cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: (item.quantity || 0) + 1,
        };
      }
      return item;
    });

    return { ...state, cart: updatedCart };
  }

  return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
};

const removeItem = (state = INITIAL_STATE, action: CartAction) => {
  return {
    ...state,
    cart: [...state.cart.filter((product) => product.id !== action.payload)],
  };
};

const incrementQuantity = (state = INITIAL_STATE, action: CartAction) => {
  const updatedCart = state.cart.map((product) => {
    if (product.id === action.payload && product.quantity >= 1) {
      return { ...product, quantity: (product.quantity || 0) + 1 };
    }
    return product;
  });

  return { ...state, cart: updatedCart };
};

const decrementQuantity = (state = INITIAL_STATE, action: CartAction) => {
  const updatedCart = state.cart.map((product) => {
    if (product.id === action.payload && product.quantity > 1) {
      return { ...product, quantity: product.quantity - 1 };
    }
    return product;
  });

  return { ...state, cart: updatedCart };
};

const cartReducer = (state = INITIAL_STATE, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addItem(state, action);

    case ADD_QUANTITY:
      return incrementQuantity(state, action);

    case REMOVE_QUANTITY:
      return decrementQuantity(state, action);

    case REMOVE_PRODUCT:
      return removeItem(state, action);

    case RESET_CART:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default cartReducer;
