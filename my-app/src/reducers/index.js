import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { usersReducer } from './usersReducer';
import {firebaseReducer} from 'react-redux-firebase'; 

export const rootReducer = combineReducers({
    events: eventsReducer,
    items: usersReducer,
    user: usersReducer,
    firebase: firebaseReducer
});