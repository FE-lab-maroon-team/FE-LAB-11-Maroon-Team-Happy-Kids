export const createDonate = (project) =>{
    return(dispatch,getState,{ getFirebase ,getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection('events').add({
           ...project,
           firstName:'Nazar',
           lastName: 'Montsik'
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT',project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR',err});
        })
    }
}