
export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';

export const showPopup = ( selectedWishesId) => (dispatch) => {
    dispatch({
        type: SHOW_POPUP,
        payload: selectedWishesId
    });
}
export const hidePopup = () => (dispatch)  => {
    dispatch({
        type: HIDE_POPUP
    })
}