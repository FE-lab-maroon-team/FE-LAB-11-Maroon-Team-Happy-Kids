import { 
    GET_USER_SUCCESS,
    GET_USER_REQUEST, 
    GET_USER_FAIL,
    SIGNOUT_SUCCESS } from '../actions';

const initialState = {
    loading: false,
    auth: null,
    isAuthorized: false,
    error: null
}
export function authReducer (state = initialState, action) {
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
                auth: action.payload
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