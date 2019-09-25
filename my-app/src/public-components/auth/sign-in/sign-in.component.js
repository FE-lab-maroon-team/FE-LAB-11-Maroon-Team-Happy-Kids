import React, {Component} from 'react';
import firebase from '../../../firebase-config';
import auth from '../../../firebase-config';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "firebase/auth";
import styles from './sign-in.module.scss';

export class SignIn extends Component {
    state = {isSignedIn: false}
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user})
        })
    }
    render(){
        return(
            <div>{this.state.isSignedIn ? (
                <>
                    <h1 className={styles.currentUsername}>Welcome: {firebase.auth.currentUser.displayName}</h1>
                    <Button onClick={() => {
                        firebase.auth.SignOut();
                    }} />
                </>
            ) : (
                <p>You can't authentification</p>
            )}
            </div>
        )
    }
}