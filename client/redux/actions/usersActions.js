import axios from 'axios'
import { LOGIN } from '../constants'

export const login = () => {
    return async dispatch => {
        try {
            const msg = await axios.post('http://127.0.0.1:8081/sessions', null, {
                withCredentials: true
            })

            console.log(msg)

            return dispatch({ type: LOGIN, data: msg })
        } catch (err) {
            console.log(err)
        }
    }
}

export const logout = () => {

}