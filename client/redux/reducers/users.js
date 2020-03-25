import Cookies from "js-cookie";

import { LOGIN, LOGOUT } from "../constants";

let initialState = {
  username: null
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state = action.data;
      // state.username = action.data.username;
      return state;
    case LOGOUT:
      state = initialState;
      return state;
    default:
      return state;
  }
};

export default users;
