import { HIDE_POPUP, SHOW_POPUP, UPDATE_WISHES_SUCCESS, UPDATE_WISHES_ERROR } from '../actions';

const initialState = {
    isPopupOpen: false,
    selectedWishesId: '',
    userObject: null
}

export function wishesReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_POPUP:
            return {
                isPopupOpen: true,
                selectedWishesId: action.payload
            }
        case HIDE_POPUP:
            return {
                initialState
            }
        case UPDATE_WISHES_SUCCESS:
            return {
                userObject: action.payload
            }
        case UPDATE_WISHES_ERROR:
            return {
                initialState
            }
        default:
            return state;
    }
}

