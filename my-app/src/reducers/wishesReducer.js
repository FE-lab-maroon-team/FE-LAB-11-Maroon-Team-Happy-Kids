import{HIDE_POPUP, SHOW_POPUP} from '../actions';

const initialState = {
    isPopupOpen: false,
    selectedWishesId: ''
}

export function wishesReducer(state = initialState, action){
    switch(action.type){
        case SHOW_POPUP:
            return{
                isPopupOpen: true,
                selectedWishesId: action.payload
            }
        case HIDE_POPUP:
            return{
                initialState
            }
        default:
            return state;
    }
}

