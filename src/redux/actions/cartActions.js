export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const INCREASE_AMOUNT = "INCREASE_AMOUNT";
export const DECREASE_AMOUNT = "DECREASE_AMOUNT";

export const addToCart = (product, id) => ({
  type: ADD_TO_CART,
  payload: { product, id },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const increaseAmount = (id) => ({
  type: INCREASE_AMOUNT,
  payload: id,
});

export const decreaseAmount = (id) => ({
  type: DECREASE_AMOUNT,
  payload: id,
});
