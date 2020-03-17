import { LOGIN, LOGOUT } from '../constants'

const users = (state = [], action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.data)
            return state;
        case LOGOUT:
            return state;
        default:
            return state;
    }
}

export default users;