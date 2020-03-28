import axios from "axios";

import {
  FETCH_GOODS_SUCCESS,
  FETCH_GOODS_FAILURE,
  FETCH_GOODS_REQUEST,
  CREATE_GOOD_SUCCESS,
  CREATE_GOOD_FAILURE,
  serverUrl,
  DELETE_GOOD_SUCCESS,
  DELETE_GOOD_FAILURE,
  UPDATE_GOOD_FAILURE
} from "../constants";

const getGoodsRequest = () => {};

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
      await axios({
        method: "POST",
        url: serverUrl + "private/" + "goods",
        data: JSON.stringify(data),
        withCredentials: true
      });

      // dispatch({ type: CREATE_GOOD_SUCCESS });

      return dispatch(getGoods());
    } catch (err) {
      dispatch({ type: CREATE_GOOD_FAILURE });
    }
  };
};

export const deleteGood = id => {
  return async dispatch => {
    try {
      await axios({
        method: "DELETE",
        url: serverUrl + "private/" + "goods/" + id,
        withCredentials: true
      });

      // dispatch({ type: DELETE_GOOD_SUCCESS, data: id });

      return dispatch(getGoods());
    } catch (err) {
      dispatch({ type: DELETE_GOOD_FAILURE, data: err });
    }
  };
};

export const updateGood = data => {
  return async dispatch => {
    try {
      const msg = await axios.put(
        serverUrl + "private/" + "goods",
        JSON.stringify(data),
        {
          withCredentials: true
        }
      );

      return dispatch(getGoods());
    } catch (err) {
      dispatch({ type: UPDATE_GOOD_FAILURE, data: err });
    }
  };
};
