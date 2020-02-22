import { ADD_TO_CART, DELETE_FROM_CART } from "../constants";

export const addToCart = data => ({
  type: ADD_TO_CART,
  data
});

export const deleteFromCart = id => ({
  type: DELETE_FROM_CART,
  id
});
