import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(initialState) {
    const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
    const store = createStore(
        allReducers,
        initialState,
        composeEnhancers
    );
    return store;
}