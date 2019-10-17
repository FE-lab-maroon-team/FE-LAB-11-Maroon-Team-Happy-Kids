import {CREATE_COMMENT_SUCCESS, 
    CREATE_COMMENT_ERROR, 
    LOAD_COMMENTS_REQUEST, 
    LOAD_COMMENTS_SUCCESS, 
    LOAD_COMMENTS_ERROR
} from '../actions/commentsAction';

const initialState = {
    pending: false,
    comments: [],
    error: null
}
 

export function commentReducer(state = initialState, action) {
    switch (action.type) {
    case CREATE_COMMENT_SUCCESS:
        console.log('create_comment_success');
        return state;
    case CREATE_COMMENT_ERROR:
        console.log('create_comment_error');
        return state;
    case LOAD_COMMENTS_REQUEST: 
        return {
            ...state,
            pending: true
        }
    case LOAD_COMMENTS_SUCCESS:
        return {
            ...state,
            pending: false,
            comments: action.payload
        }
    case LOAD_COMMENTS_ERROR:
        return {
            ...state,
            pending: false,
            error: action.payload
        }
      default:
        return state;
    }
};


const getCommentsReducer = state => state.comments;

export const getComments = state => getCommentsReducer(state).comments;
export const getCommentsPending = state => getCommentsReducer(state).pending;
export const getCommentsError = state => getCommentsReducer(state).error;
  
