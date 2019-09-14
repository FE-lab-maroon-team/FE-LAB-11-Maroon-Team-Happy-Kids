import React from 'react';
import '../header/header.css';
import { Link } from 'react-router-dom';


export const Header = () =>{

    return(
        <div className="header">
            <Link to='/'><div className="header_logo"></div></Link>
            <nav className="header_menu">
                <ul className="header_menu__item">
                    <li>Home</li>
                    <li>Events</li>
                </ul>
            </nav>
        </div>
    )
}
