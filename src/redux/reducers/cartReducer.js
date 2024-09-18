import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
} from "../actions/cartActions";

const initialState = {
  cart: [],
  itemAmount: 0,
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, id } = action.payload;
      const newProduct = { ...product, amount: 1 };
      const cartItem = state.cart.find((item) => item.id === id);
      if (cartItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case INCREASE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    case DECREASE_AMOUNT: {
      const target = state.cart.find((item) => item.id === action.payload);
      if (target.amount === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, amount: item.amount - 1 }
              : item
          ),
        };
      }
    }
    default:
      return state;
  }
};

// Helper to calculate total and item amounts
const calculateTotals = (state) => {
  const { cart } = state;
  let { total, itemAmount } = cart.reduce(
    (acc, item) => {
      acc.total += item.price * item.amount;
      acc.itemAmount += item.amount;
      return acc;
    },
    { total: 0, itemAmount: 0 }
  );
  return { ...state, total, itemAmount };
};

// Wrap the reducer to always calculate totals after state changes
const rootCartReducer = (state = initialState, action) => {
  const newState = cartReducer(state, action);
  return calculateTotals(newState);
};

export default rootCartReducer;
