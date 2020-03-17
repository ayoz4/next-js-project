import {
    FETCH_GOODS_FAILURE,
    FETCH_GOODS_REQUEST,
    FETCH_GOODS_SUCCESS,
} from '../constants'

let initialState = {
    isFetching: false,
    isFetched: false,
    error: null,
    goods: [],
}

const goods = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOODS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                goods: action.data,
            }
        case FETCH_GOODS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_GOODS_FAILURE:
            return {
                ...state,
                isFetching: false,
                isFetched: false,
                error: action.data,
            }
        default:
            return state
    }
}

export default goods