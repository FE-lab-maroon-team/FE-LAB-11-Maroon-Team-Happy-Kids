import React, {Component} from 'react';
import firebase from "../../firebase-config";
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import "firebase/auth";
import { SignIn } from './sign-in';

export class Auth extends Component{
    render(){
        return(
            <SignIn />
        )
    }
    
}