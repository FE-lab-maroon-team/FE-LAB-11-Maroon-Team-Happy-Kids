import React from 'react';
import HeaderStyles from '../header/header.css' 

export const Header = () =>{

    return(
        <div className="header">
            <div className="header_logo">CompanyLogo</div>
            <nav className="header_menu">
                <ul className="header_menu__item">
                    <li>Home</li>
                    <li>Events</li>
                </ul>
            </nav>
        </div>
    )
}