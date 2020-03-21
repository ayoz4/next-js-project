import axios from "axios";

import { LOGIN } from "../constants";

export const login = () => {
  return async dispatch => {
    try {
      await axios.post("http://localhost:8081/sessions", null, {
        withCredentials: true
      });

      return dispatch({ type: LOGIN });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = () => {};
