import thunk from 'redux-thunk'
import { createStore , applyMiddleware } from 'redux';
import { rootReducer } from '../reducer/combineReducers';
import { composeWithDevTools } from 'redux-devtools-extension';


export function configureStore(initialState){
    const compose = composeWithDevTools(applyMiddleware(thunk))
    const store = createStore(
        rootReducer,
        initialState,
        compose
    );
    return store
}