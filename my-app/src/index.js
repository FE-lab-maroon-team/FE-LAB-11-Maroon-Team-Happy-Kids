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

function AppRouter(){
    return (  
            <Router>
                <Header />
                <div className={styles.container}>
                </div>
                <Footer/>
            </Router>
    )
}

ReactDOM.render(<AppRouter />,document.querySelector('#root')
)

