import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Events } from './pages/events';
import { Profile } from './pages/profile';
import { Footer } from './public-components/footer';
import { Header } from './public-components/header'
import styles from './index.module.scss';
import { Homepage } from './pages/homepage';
// import { Button } from './public-components/button';

export function AppRouter(){
    return (  
            <Router>
                <Header />
                <div className={styles.container}>
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
                <Footer/>
            </Router>
    )
}

ReactDOM.render(<AppRouter />,document.querySelector('#root')
)