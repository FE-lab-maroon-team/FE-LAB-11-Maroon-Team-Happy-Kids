import React from 'react';
import styles from './social-media-login.module.scss';

export const SocialMediaLogin = (props) => {
    const {googleLogin, facebookLogin, githubLogin} = props;

    return(
        <div className={styles.container_socialMedia}>
            <a href="#" className="btn btn_google" onClick={googleLogin}>
                <span className="fa fa-google">Sign in Google</span>
            </a>
            <a href="#" className="btn btn_facebook" onClick={facebookLogin}>
                <span className="fa fa-facebook">Sign in Facebook</span>
            </a>
            <a href="#" className="btn btn_github" onClick={githubLogin}>
                <span className="fa fa-github">Sign in Github</span>
            </a>
        </div>
    )
};