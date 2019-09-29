import { LOAD_USERS_SUCCESS, LOAD_USERS_ERROR, LOAD_USERS_PENDING } from '../actions/usersAction'

const initialState = {
    pending: false,
    users: [],
    error: null
}

export function usersReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_USERS_PENDING:
            return {
                ...state,
                pending: true
            }
        case LOAD_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case LOAD_USERS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUsers = state => state.users;
export const getUsersPending = state => state.pending;
export const getUsersError = state => state.error;