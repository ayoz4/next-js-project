import { ADD_TO_CART, DELETE_FROM_CART } from "../constants";

let initialState = [
  {
    id: 1,
    name: "asd",
    description: "qwe",
    parice: 500
  }
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.data);
      return [...state, action.data];
    case DELETE_FROM_CART:
      return state;
    default:
      return state;
  }
};

export default cart;
