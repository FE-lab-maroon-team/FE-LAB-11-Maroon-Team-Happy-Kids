import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, SIGNOUT_SUCCESS } from '../actions';

const initialState = {
    loading: false,
    user: null,
    isAuthorized: false,
    error: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case  GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                isAuthorized: true,
                loading: false,
                user: action.payload
            };
        case GET_USER_FAIL:
            return{
                ...state,
                loading: false,
                isAuthorized: false,
                error: action.payload
            };
        case SIGNOUT_SUCCESS:
            return initialState
    default:
        return state;
    }
}