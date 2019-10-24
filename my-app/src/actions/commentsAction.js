import { db } from '../firebase-config';
import moment from 'moment';

export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';


export const createComment = (comment) => { 
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('comments').add({
        value: comment.value,
        id: `f${(~~(Math.random()*1e8)).toString(16)}`,
        createdAt: moment().format('LLLL'),
      }).then(() => {
        dispatch({ type: CREATE_COMMENT_SUCCESS });
      }).catch(err => {
        dispatch({ type: CREATE_COMMENT_ERROR }, err);
      });

    }
};


export function loadCommentsRequest() {
    return {
        type: LOAD_COMMENTS_REQUEST
    }
}

export function loadCommentsSuccess(comments) {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        payload: comments
    }
}

export function loadCommentsError(error) {
    return {
        type: LOAD_COMMENTS_ERROR,
        payload: error
    }
}



export const fetchComments = () => (dispatch) => {
    dispatch(loadCommentsRequest());
    const allComments = db.collection("comments");
    const observer = db.collection("comments");
    const commentsData = [];
    const newCommentsData = [];
    allComments
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                commentsData.push(doc.data());
            });
            commentsData.sort(function(a, b) {
                a = new Date(a.createdAt);
                b = new Date(b.createdAt);
                return a>b ? -1 : a<b ? 1 : 0;
            })
            dispatch(loadCommentsSuccess(commentsData));
        })
        .catch(error => {
            dispatch(loadCommentsError(error));
        });


    // adding listener to data changing in database for real-time rendering
    observer
            .onSnapshot(docSnapshot => {
                docSnapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        newCommentsData.push(change.doc.data())
                    }
                    if (change.type === 'modified') {
                        newCommentsData.push(change.doc.data())
                    }
                    if (change.type === 'removed') {
                        newCommentsData.push(change.doc.data())
                    }
                });
                newCommentsData.sort(function(a, b) {
                    a = new Date(a.createdAt);
                    b = new Date(b.createdAt);
                    return a>b ? -1 : a<b ? 1 : 0;
                })
                dispatch(loadCommentsSuccess(newCommentsData));
            });
}