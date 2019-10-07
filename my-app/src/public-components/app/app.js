import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Footer } from '../footer';
import { Header } from '../header'
import { Homepage } from '../../pages/homepage';
import { Profile } from '../../pages/profile';
import { Events } from '../../pages/events';



import styles from './app.module.scss';



const App = () => {
    return ( 
        <> 
            <Header />
                <div className={styles.container}>
                <Switch>
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/events" exact component={Events}></Route>
                    <Route path="/profile/:id" 
                        render={({match}) => {
                            const {id} = match.params;
                            return <Profile userId = {id} />
                        }} />
                    {/* <Route path="/login" exact component={Auth}></Route> */}
                </Switch>
                </div>
            <Footer />
        </>
    )
};

export default App;