import React from 'react';
import { Textlink } from '../text-link/index'
import '../header/header.css';
import { Link } from 'react-router-dom';
import { Auth } from '../auth';



export const Header = () =>{

    return(
        <div className="header">
            <Link to='/'><div className="header_logo"></div></Link>
            <nav className="header_menu">
                <ul className="header_menu__item">
                    <li><Textlink path='/' name="Home"/></li>
                    <li><Textlink path='/events' name="Events"/></li>
                    <li><Auth /></li>
                </ul>
            </nav>
        </div>
    )
}
