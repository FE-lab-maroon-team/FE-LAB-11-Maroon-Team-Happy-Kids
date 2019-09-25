import React from 'react';
import firebase from '../../../firebase-config'
import 'firebase/auth';
import { Button } from '../../button';

export const SignOut = () => {
    return(
        <Button text="Sign Out" 
                onClick={() => firebase.auth().signOut()} 
        />
    )
}
