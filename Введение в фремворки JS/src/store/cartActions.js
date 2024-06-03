export const addToCart = (id, count) => ({
  type: "ADD_TO_CART",
  payload: id,
  count: count,
});

export const incrementQuantity = (id) => ({
  type: "INCREMENT_QUANTITY",
  payload: id,
});

export const decrementQuantity = (id) => ({
  type: "DECREMENT_QUANTITY",
  payload: id,
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});
export const clearCart = () => ({
  type: "CLEAR_CART",
});
