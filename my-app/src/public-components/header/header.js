import React from 'react';
import { Textlink } from '../text-link/index'
import './header.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { signOut } from '../../actions';


const Header = (props) =>{
    const {isAuthenticated} = props;
    const userLink = (
        <li><span className="text_link" onClick={props.signOut}>Вийти</span></li>
    );

    const guestLink = (
        <li><Textlink name="Увійти" path='/login' /></li>
    );
    return(
        <div className="header">
            <Link to='/'><div className="header_logo"></div></Link>
            <nav className="header_menu">
                <ul className="header_menu__item">
                    <li><Textlink path='/' name="Home"/></li>
                    <li><Textlink path='/events' name="Events"/></li>
                    {isAuthenticated.user.isAuthorized ? userLink : guestLink}
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state
    }
}
const mapDispatchToProps = {
    signOut
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);