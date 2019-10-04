import { LOAD_USERS_SUCCESS, LOAD_USERS_ERROR, LOAD_USERS_REQUEST } from '../actions/usersAction'

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
                pending: true
            }
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                pending: false
            }
        case LOAD_USERS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}


const getUsersReducer = state => state.users;

export const getUsers = state => getUsersReducer(state).users;
export const getUsersPending = state => getUsersReducer(state).pending;
export const getUsersError = state => getUsersReducer(state).error;