import { db } from '../../firebase-config'
import { dispatch } from 'C:/Users/nazze/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export function userRequest () { 
    return{
        type:FETCH_USER_REQUEST,
        payload:'Sending Request'
    }
 }

 export function userSuccess (users) {
     return {
         type:FETCH_USER_SUCCESS,
         payload:users
     }
 }

 export function userFailure (error) {
     return {
         type:FETCH_USER_FAILURE,
         payload:error
         
     }
 }

 export function getUsers(){

    dispatch(userRequest);
    const allUsers = db.collection('users');
    const usersData = [];
    allUsers.get().then(snapshot => {
      snapshot.forEach(doc => {
        usersData.push(doc.data());
      })
    dispatch(userSuccess(usersData))
    })
    .catch(error => {dispatch(userFailure(error))})
 }