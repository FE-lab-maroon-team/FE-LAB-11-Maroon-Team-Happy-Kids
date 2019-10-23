import { db } from '../firebase-config';
import { loadEventsSuccess } from './eventsAction';
export const CREATE_PAYMENT_SUCCESS = 'CREATE_PAYMENT_SUCCESS';
export const CREATE_PAYMENT_ERROR = 'CREATE_PAYMENT_ERROR';
export const UPDATE_DB_SUCSESS = 'UPDATE_DB_SUCSESS';



export const createDonate = (payment) =>{
    return(dispatch,getState,{ getFirebase ,getFirestore}) =>{
        const firestore = getFirestore();
        const observer = db.collection("events");
        const updateData=[];
        firestore.collection('events').doc(payment.id).update({
            currentAmount: payment.currentAmount,
            LastDate:payment.donationDate,
            LastName:payment.donationName
        })
        .then(() => {
            dispatch({ type: CREATE_PAYMENT_SUCCESS});
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
            dispatch({ type: CREATE_PAYMENT_ERROR},err);
        })
    }
};


