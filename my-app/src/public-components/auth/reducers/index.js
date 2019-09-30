import { combineReducers } from 'redux';
import {firebaseReducer} from 'react-redux-firebase'; 
import UserReducer from './user-reducer.component';

export const rootReducer = combineReducers({
    user: UserReducer,
    firebase: firebaseReducer
});
