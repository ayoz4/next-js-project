import axios from "axios";

import {
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_FAILURE,
  FETCH_GOODS_REQUEST,
  CREATE_GOOD_SUCCESS,
  CREATE_GOOD_FAILURE,
  serverUrl
} from "../constants";

export const getGoods = () => {
  return async dispatch => {
    dispatch({ type: FETCH_GOODS_REQUEST });

    try {
      const msg = await axios.get(serverUrl + "goods");

      return dispatch({ type: FETCH_GOODS_SUCCESS, data: msg.data });
    } catch (err) {
      return dispatch({ type: FETCH_GOODS_FAILURE, data: err });
    }
  };
};

export const createGood = data => {
  return async dispatch => {
    try {
      parseInt(data.price);

      console.log(data);

      const msg = await axios({
        method: "POST",
        url: serverUrl + "private/" + "goods",
        data: JSON.stringify(data),
        withCredentials: true
      });

      console.log(msg);

      return dispatch({ type: CREATE_GOOD_SUCCESS });
    } catch (error) {
      dispatch({ type: CREATE_GOOD_FAILURE });
    }
  };
};
