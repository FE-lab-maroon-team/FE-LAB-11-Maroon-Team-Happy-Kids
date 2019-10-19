import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseconfig from '../firebase-config';

export function configureStore(initialState) {
    const composeEnhancers = composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebaseconfig),
        reactReduxFirebase(firebaseconfig)
        );
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers
    );
    return store;
}