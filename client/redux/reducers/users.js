import Cookies from "js-cookie";

import { LOGIN, LOGOUT } from "../constants";

const users = (state = [], action) => {
  switch (action.type) {
    case LOGIN:
      console.log(Cookies.get('user'));
      return state;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};

export default users;
