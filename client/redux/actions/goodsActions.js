import axios from 'axios'

import { FETCH_GOODS_SUCCESS, FETCH_GOODS_FAILURE, FETCH_GOODS_REQUEST } from '../constants'

export const getGoods = () => {
    return async dispatch => {
        dispatch({ type: FETCH_GOODS_REQUEST })

        try {
            const msg = await axios.get('http://127.0.0.1:8081/goods')

            return dispatch({ type: FETCH_GOODS_SUCCESS, data: msg.data })
        } catch (err) {
            return dispatch({ type: FETCH_GOODS_FAILURE, data: err })
        }

    }
}

export const createGood = data => {
    return dispatch => {

    }
}