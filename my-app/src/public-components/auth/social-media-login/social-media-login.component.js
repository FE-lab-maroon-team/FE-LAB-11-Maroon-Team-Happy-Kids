import React from 'react';
import './social-media-login.scss';
import {googleProvider, facebookProvider, githubProvider } from '../../../firebase-config';
import {connect} from 'react-redux'
const SocialMediaLogin = (props) => {
    const {signIn} = props;
    const {user} = props;
    return(
        <>{user.auth.isAuthorized ? (
            <div className="container_socialMedia">
                <div><h3>Ваш email:</h3><p>{user.auth.auth.email}</p></div>  
                <div><h3>Вітаємо:</h3><p>{user.auth.auth.name}</p></div> 
            </div>       
            ) : (
            <div className="container_socialMedia">
                <div className="btn btn_google" onClick={() => signIn(googleProvider)}>
                    <span className="fa fa-google">Sign in Google</span>
                </div>
                <div className="btn btn_facebook" onClick={() => signIn(facebookProvider)}>
                    <span className="fa fa-facebook">Sign in Facebook</span>
                </div>
                <div className="btn btn_github" onClick={() => signIn(githubProvider)}>
                    <span className="fa fa-github">Sign in Github</span>
                </div>
            </div>
            )}
        </>
    )
};
const mapStateToProps = (state) => {
    return{
        user: state
    }
}

export default connect(mapStateToProps)(SocialMediaLogin);