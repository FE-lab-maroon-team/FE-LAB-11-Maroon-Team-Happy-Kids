import React, {Component} from 'react';
import {SignIn} from './sign-in';
import {SignOut} from './sign-out';
import firebase from "../../firebase-config";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { firebaseConfig } from "../../firebase-config";

export class Auth extends Component{
    render(){
        return(
            <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
                <div>
                    <SignIn />
                    <SignOut />
                    <div>
                        {/* <FirebaseAuthConsumer>
                            {({ isSignedIn, user, providerId }) => {
                                return (
                                <pre style={{ height: 300, overflow: "auto" }}>
                                    {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                                </pre>
                                );
                            }}
                        </FirebaseAuthConsumer> */}
                    <IfFirebaseAuthed>
                        {() => {
                        return <div>You are authenticated</div>;
                        }}
                    </IfFirebaseAuthed>
                    <IfFirebaseAuthedAnd
                        filter={({ providerId }) => providerId !== "anonymous"}
                    >
                        {({ providerId }) => {
                        return <div>You are authenticated with {providerId}</div>;
                        }}
                    </IfFirebaseAuthedAnd>
                    </div>
                </div>
            </FirebaseAuthProvider>
        )
    }
}