import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { usersReducer } from './usersReducer'; 
import{ authReducer} from './authReducer';
import { donateReducer } from './donateReducer';
import { commentReducer } from './commentsReducer';
import { wishesReducer } from './wishesReducer';
import { firestoreReducer } from 'redux-firestore';


export const rootReducer = combineReducers({
    events: eventsReducer,
    items: usersReducer,
    user: usersReducer,
    auth: authReducer,
    wishes: wishesReducer,
    donate: donateReducer,
    comments: commentReducer,
    firestore: firestoreReducer,
});

