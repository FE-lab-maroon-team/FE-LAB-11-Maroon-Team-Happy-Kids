
import { auth, googleProvider, facebookProvider, githubProvider } from '../../../firebase-config';
import "firebase/auth";
export const GET_USER = 'get_user';

export function logOut(){
    return dispatch => auth.signOut();
}

export function googleLogin(){
    return dispatch => auth.signInWithPopup(googleProvider)
}
export function facebookLogin(){
    return dispatch => auth.signInWithPopup(facebookProvider)
}
export function githubLogin(){
    return dispatch => auth.signInWithPopup(githubProvider)
}