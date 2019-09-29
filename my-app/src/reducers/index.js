import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { usersReducer } from './usersReducer';

export const allReducers = combineReducers({
    eventsReducer,
    usersReducer
});