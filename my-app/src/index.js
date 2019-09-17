import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Events } from './pages/events';
import { Homepage } from './pages/homepage';
import { Profile } from './pages/profile';
import { Header } from './public-components/header'
// import { Button } from './public-components/button';
import styles from './index.scss';

function AppRouter(){
    return (
        <>
        <Router>
            <div className={styles.wrapper}>
            <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/events'>Events</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component ={Homepage}/>
                <Route path="/events/" exact component ={Events}/>
                <Route path="/profile/" exact component ={Profile}/>
            </div>
        </Router>
        </>
    )
}
ReactDOM.render(<AppRouter />,document.querySelector('#root')
)

