import axios from "axios";

import { LOGIN, serverUrl, LOGOUT } from "../constants";

export const login = () => {
  return async dispatch => {
    try {
      const msg = await axios.post(serverUrl + "sessions", null, {
        withCredentials: true
      });

      console.log(document.cookie);

      return dispatch({ type: LOGIN, data: msg.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      const msg = await axios.post(serverUrl + "delsessions", null, {
        withCredentials: true
      });

      return dispatch({ type: LOGOUT });
    } catch (err) {
      console.log(err);
    }
  };
};

export const whoami = () => {
  return async dispatch => {
    try {
      if (!document.cookie) {
        return;
      }

      const msg = await fetch(serverUrl + "private/" + "whoami");

      if (msg.status === 401) {
        dispatch(logout());
      }
    } catch (err) {
      console.log(err);
    }
  };
};
