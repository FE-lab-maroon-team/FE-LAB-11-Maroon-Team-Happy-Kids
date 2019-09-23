import React from 'react';
import firebase from '../../../firebase-config';
import "firebase/auth";
import {Button} from '../../button';

export const SignIn = () => {
    return(
        <>
            <Button text="SignIn Google" onClick={() => {
                const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(googleAuthProvider)
            }} />
            {/* <Button text="SignIn Facebook" onClick={() => {
                const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(facebookAuthProvider)
            }} /> */}
        </>
    )
}