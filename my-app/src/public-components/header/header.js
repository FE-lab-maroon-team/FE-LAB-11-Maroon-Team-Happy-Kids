import React from 'react';
import '../header/header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Homepage } from '../../pages/homepage';

export const Header = () =>{

    return(
         <Router>
        <div className="header">
            <Link to='/'><div className="header_logo"></div></Link>
            <nav className="header_menu">
                <ul className="header_menu__item">
                    <li>Home</li>
                    <li>Events</li>
                </ul>
            </nav>
        </div>
        <Route path="/" exact component ={Homepage}/>
        </Router>
    )
}
