import * as constants from "../constants";
import { Good } from "../types";

export interface AddToCart {
  type: constants.ADD_TO_CART;
  data: Good;
}

export interface DeleteFromCart {
  type: constants.DELETE_FROM_CART;
  id: string;
}

export interface IncrementCount {
  type: constants.QUANTITY_CHANGED;
  data: IncrementData;
}

interface IncrementData {
  id: string;
  e: HTMLInputElement;
}

export type CartAction = AddToCart | DeleteFromCart | IncrementCount;

export const addToCart = (data: Good): CartAction => ({
  type: constants.ADD_TO_CART,
  data,
});

export const deleteFromCart = (id: string): CartAction => ({
  type: constants.DELETE_FROM_CART,
  id,
});

export const incrementCount = (data: IncrementData): CartAction => ({
  type: constants.QUANTITY_CHANGED,
  data,
});
