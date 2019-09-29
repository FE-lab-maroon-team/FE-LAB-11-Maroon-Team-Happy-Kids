export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_PENDING = 'LOAD_USERS_PENDING';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';

export function loadUsersPending() {
    return {
        type: LOAD_USERS_PENDING
    }
}

export function loadUsersSuccess(users) {
    return {
        type: LOAD_USERS_SUCCESS,
        payload: users
    }
}

export function loadUsersError(error) {
    return {
        type: LOAD_USERS_ERROR,
        error: error
    }
}