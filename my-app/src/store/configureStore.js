import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from '../reducers';
import { __REDUX_DEVTOOLS_EXTENSION__ } from 'redux-devtools'

export function configureStore(initialState) {
    const composeEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__());
    const store = createStore(
        allReducers,
        initialState,
        composeEnhancers
    );
    return store;
}