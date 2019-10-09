import { LOAD_USERS_SUCCESS, LOAD_USERS_ERROR, LOAD_USERS_REQUEST } from '../actions'

const initialState = {
    pending: false,
    users: [],
    error: null
}

export function usersReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                pending: true
            }
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                pending: false,
                users: action.payload,
            }
        case LOAD_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}


const getUsersReducer = state => state.items;

export const getUsers = state => getUsersReducer(state).users;
export const getUsersPending = state => getUsersReducer(state).pending;
export const getUsersError = state => getUsersReducer(state).error;