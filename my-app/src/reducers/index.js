import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { usersReducer } from './usersReducer'; 
import{ authReducer} from './authReducer';
import { wishesReducer } from './wishesReducer';


export const rootReducer = combineReducers({
    events: eventsReducer,
    items: usersReducer,
    user: usersReducer,
    auth: authReducer,
    wishes: wishesReducer
});