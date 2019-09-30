import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from './public-components/footer';
import { Header } from './public-components/header'
import { Homepage } from './pages/homepage/index';
import { Profile } from './pages/profile/index';
import { Events } from './pages/events/index';
import { Provider } from 'react-redux';
import styles from './index.module.scss';
import Auth from './public-components/auth/auth.component';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './public-components/auth/reducers/user-reducer.component';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

function AppRouter(){
    return ( 
        <Provider store={createStoreWithMiddleware(rootReducer)}>
            <Router>
                <Header />
                <div className={styles.container}>
                    <Route path="/" exact component={Homepage}></Route>
                    <Route path="/events" exact component={Events}></Route>
                    <Route path="/profile/:id" 
                    render={({match}) => {
                        const {id} = match.params;
                        return <Profile userId = {id} />
                    }} />
                    <Route path="/login" exact component={Auth}></Route>
                </div>
                <Footer />
            </Router>
        </Provider>
    )
}

ReactDOM.render(<AppRouter />,document.querySelector('#root'));