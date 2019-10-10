
import {auth} from '../firebase-config';
import "firebase/auth";
export const GET_USER_FAIL = 'get_user_fail';
export const GET_USER_REQUEST = 'get_user_request';
export const GET_USER_SUCCESS = 'get_user_success';
export const SIGNOUT_SUCCESS = 'sign-out_success';

export const signIn =  (provider) => (dispatch) => {
    dispatch({
        type: GET_USER_REQUEST
    });
    auth.signInWithPopup(provider)
    .then(({user}) => {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {name: user.displayName, email: user.email}
            })
        }
    )
    .catch(error => {
        dispatch({
            type: GET_USER_FAIL,
            payload: error
        })
    })
};

export const signOut = () => (dispatch) => {
    auth.signOut()
    .then(() => {
        dispatch({
            type: SIGNOUT_SUCCESS
        })
    })
}