import { db } from '../firebase-config'
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';
export const UPDATE_DB_SUCSESS = 'UPDATE_DB_SUCSESS';



export const createDonate = (project) =>{
    return(dispatch,getState,{ getFirebase ,getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection('events').doc(project.id).update({
            currentAmount: project.currentAmount,
            LastDate:project.donationDate,
            LastName:project.donationName
        })
        .then(() => {
            dispatch({ type: CREATE_PROJECT});
        })
        .catch((err) => {
            dispatch({ type: CREATE_PROJECT_ERROR},err);
        })
    }
};


