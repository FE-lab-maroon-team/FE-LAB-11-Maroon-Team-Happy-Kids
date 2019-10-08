import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {  rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(initialState) {
    const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers
    );
    return store;
}