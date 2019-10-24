import { db } from '../firebase-config';

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

export const checkWishInDB = (userId, selectedWish) => (dispatch) => {
    const docRef = db.collection("users").doc(userId);
    docRef
    .get()
    .then((doc) => {
        let wishesarr = doc.data().wishes;
        wishesarr.forEach(obj => {
        if (obj.hasOwnProperty("isActive")) {
            if (obj.id === selectedWish) {
            obj["isActive"] = false;
            updateWishInDB(wishesarr, userId);
            }
        }
        });
        
    })
    .catch((error) => (dispatch) => {
        console.log("Error getting document:", error);
    });
};

export const updateWishInDB = (wishes, userId) => (dispatch) => {
    const docRef = db.collection("users").doc(userId);
    docRef
    .update({wishes})
};
