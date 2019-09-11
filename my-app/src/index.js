import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Events } from './pages/events';
import { Homepage } from './pages/homepage';
import { Pdp } from './pages/pdp';
import { Header } from './public-components/header'
import { Button } from './public-components/button';
// import { MainPage } from './pages';

function AppRouter(){

    return (
        <>
        <Header />
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/events'>Events</Link>
                        </li>
                        <li>
                            <Link to='/pdp'>Pdp</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component ={Homepage}/>
                <Route path="/events/" exact component ={Events}/>
                <Route path="/pdp/" exact component ={Pdp}/>
            </div>
        </Router>
        </>
    )
}
ReactDOM.render(<AppRouter />,document.querySelector('#root')
)

