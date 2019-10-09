import { db } from '../firebase-config';

export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';

export const loadUsersRequest = () => {
  return {
    type: LOAD_USERS_REQUEST
  }
}

export const loadUsersSuccess = (users) => {
  return {
    type: LOAD_USERS_SUCCESS,
    payload: users
  }
}

export const loadUsersError = (error) => {
  return {
    type: LOAD_USERS_ERROR,
    payload: error
  }
}


export const fetchUsers = () => (dispatch) => {
  dispatch(loadUsersRequest());
  const allUsers = db.collection("users");
  const usersData = [];
  allUsers
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        usersData.push(doc.data());
      });
      dispatch(loadUsersSuccess(usersData));
    })
    .catch(error => {
      dispatch(loadUsersError(error));
    });
}

