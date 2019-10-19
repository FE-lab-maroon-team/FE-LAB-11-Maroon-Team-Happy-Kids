import { combineReducers } from 'redux';
import { eventsReducer } from './eventsReducer';
import { usersReducer } from './usersReducer'; 
import{ authReducer} from './authReducer';
<<<<<<< HEAD
import { donateReducer } from './donateReducer';
=======
import { commentReducer } from './commentsReducer';
import { firestoreReducer } from 'redux-firestore';
>>>>>>> 5da614af6d9fe82295232c6e81fa764e96b953aa


export const rootReducer = combineReducers({
    events: eventsReducer,
    items: usersReducer,
    user: usersReducer,
    auth: authReducer,
<<<<<<< HEAD
    donate: donateReducer
});
=======
    comments: commentReducer,
    firestore: firestoreReducer,
});
>>>>>>> 5da614af6d9fe82295232c6e81fa764e96b953aa
