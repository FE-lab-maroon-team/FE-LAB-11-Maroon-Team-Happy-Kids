import React, {Component} from 'react';
import { SocialMediaLogin } from './social-media-login';
import {connect} from 'react-redux';
import { googleLogin, facebookLogin, githubLogin } from './sign-in';

class Auth extends Component{
    render(){
        return(
                <div>
                    <SocialMediaLogin {...this.props} />
                </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps,{ googleLogin,  facebookLogin, githubLogin})(Auth);