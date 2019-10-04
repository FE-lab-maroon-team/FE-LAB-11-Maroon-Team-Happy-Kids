import React, {Component} from 'react';
import SocialMediaLogin from './social-media-login/social-media-login.component';
import {connect} from 'react-redux';
import { signIn } from './actions';

class Auth extends Component{
    render(){
        return(
                <div>
                    <SocialMediaLogin signIn = {this.props.signIn} />
                </div>
        )
    }
    
}
const mapDispatchToProps = {
    signIn
}

export default connect(null ,mapDispatchToProps)(Auth);