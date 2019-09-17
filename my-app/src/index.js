import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Events } from './pages/events';
import { Homepage } from './pages/homepage';
import { Profile } from './pages/profile';
import { Footer } from './public-components/footer';
import { Header } from './public-components/header'
import styles from './index.scss';

function AppRouter(){
    return (
        <div className={styles.container}>
            <Router>
                <div>
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
                    <Footer/>
                </div>
            </Router>
        </div>
    )
}


ReactDOM.render(<AppRouter />,document.querySelector('#root')
)

