import { db } from '../firebase-config';
import moment from 'moment';

export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_ERROR = 'CREATE_COMMENT_ERROR';

export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_ERROR = 'LOAD_COMMENTS_ERROR';


export const createComment = (comment) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('comments').add({
        ...comment,
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
    const commentsData = [];
    allComments
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                commentsData.push(doc.data());
            });
            dispatch(loadCommentsSuccess(commentsData));
        })
        .catch(error => {
            dispatch(loadCommentsError(error));
        });
}