import axios from "axios";

import { LOGIN, serverUrl, LOGOUT } from "../constants";

export const login = () => {
  return async dispatch => {
    try {
      const msg = await axios.post(serverUrl + "sessions", null, {
        withCredentials: true
      });

      console.log(msg);

      return dispatch({ type: LOGIN, data: msg.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = () => {
  return dispatch => {
    return dispatch({ type: LOGOUT });
  };
};
