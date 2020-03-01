import { ADD_TO_CART, DELETE_FROM_CART, QUANTITY_CHANGED } from "../constants";

let initialState = [
  {
    id: 1,
    name: "asd",
    description: "qwe",
    quantity: 1,
    price: 500
  }
];

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const good = state.findIndex(good => good.name === action.data.name);

      if (state[good]) {
        state[good].quantity += 1;

        return [...state];
      }

      action.data.quantity = 1;
      return [...state, action.data];
    case DELETE_FROM_CART:
      return [...state].filter(good => good.id !== action.id);

    case QUANTITY_CHANGED:
      console.log(action.data);
      const index = state.findIndex(good => good.id === action.data.id);

      state[index].quantity = action.data.e;

      return [...state];
    default:
      return state;
  }
};

export default cart;
