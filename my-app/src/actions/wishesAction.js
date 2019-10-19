import { db } from '../firebase-config';

export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';
export const UPDATE_WISHES_SUCCESS = 'UPDATE_WISHES_SUCCESS';
export const UPDATE_WISHES_ERROR = 'UPDATE_WISHES_ERROR';

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

export const updateWishesSuccess = (userObject) => {
    return {
      type: UPDATE_WISHES_SUCCESS,
      payload: userObject
    }
  }
  
  export const updateWishesError = (error) => {
    return {
      type: UPDATE_WISHES_ERROR,
      payload: error
    }
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
            const element = obj;
            updateWishInDB(element, userId);
            console.log(element);
            }
        }
        });
        
    })
    .catch((error) => (dispatch) => {
        dispatch(updateWishesError(error));
        console.log("Error getting document:", error);
    });
};

export const updateWishInDB = (wishes, userId) => (dispatch) => {
    const docRef = db.collection("users").doc(userId);
    docRef
    .update({wishes})
    // .then(dispatch(updateWishesSuccess(wishes)))
};