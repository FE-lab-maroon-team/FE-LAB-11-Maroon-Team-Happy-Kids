import { db } from '../firebase-config';
import { loadEventsSuccess } from './eventsAction';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';
export const UPDATE_DB_SUCSESS = 'UPDATE_DB_SUCSESS';



export const createDonate = (project) =>{
    return(dispatch,getState,{ getFirebase ,getFirestore}) =>{
        const firestore = getFirestore();
        const observer = db.collection("events");
        const updateData=[];
        firestore.collection('events').doc(project.id).update({
            currentAmount: project.currentAmount,
            LastDate:project.donationDate,
            LastName:project.donationName
        })
        .then(() => {
            dispatch({ type: CREATE_PROJECT});
        }).then( () => {
            observer.onSnapshot(snapshot =>{
                snapshot.docChanges().forEach(change=>{
                    if(change.type === 'added'){
                        updateData.push(change.doc.data());
                    }
                    if(change.type === 'modified'){
                        updateData.push(change.doc.data());
                    }
                    if(change.type === 'removed'){
                        updateData.push(change.doc.data())
                    }
                });
                dispatch(loadEventsSuccess(updateData))
            });
        })
        .catch((err) => {
            dispatch({ type: CREATE_PROJECT_ERROR},err);
        })
    }
};


