import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { usersReducer } from './usersReducer'; 
import{ authReducer} from './authReducer';
import { commentReducer } from './commentsReducer';
import { firestoreReducer } from 'redux-firestore';


export const rootReducer = combineReducers({
    events: eventsReducer,
    items: usersReducer,
    user: usersReducer,
    auth: authReducer,
    comments: commentReducer,
    firestore: firestoreReducer,
});
