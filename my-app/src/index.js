import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Footer } from './public-components/footer';
import { Header } from './public-components/header'
import { Homepage } from './pages/homepage/index';
import { Profile } from './pages/profile/index'
import { Events } from './pages/events/index';
import styles from './index.module.scss';
import { Button } from './public-components/button';

function AppRouter(){
    return (  
            <Router>
                <Header />
                <div className={styles.container}>
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/events" exact component={Events}></Route>
                    <Route path="/about" exact component={Profile}></Route>
                </div>
                <Footer/>
            </Router>
    )
}

ReactDOM.render(<AppRouter />,document.querySelector('#root')
)

