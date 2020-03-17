import axios from 'axios'
import { LOGIN } from '../constants'

let axiosConfig = {
    withCredentials: false,
}

export const login = () => {
    return async dispatch => {
        try {
            const msg = await axios.post('http://localhost:8081/sessions', null, axiosConfig)

            return dispatch({ type: LOGIN, data: msg })
        } catch (err) {
            console.log(err)
        }
    }
}

export const logout = () => {

}