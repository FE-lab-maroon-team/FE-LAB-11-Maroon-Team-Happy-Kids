import { db } from '../firebase-config';
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST';
export const LOAD_EVENTS_ERROR = 'LOAD_EVENTS_ERROR';


export function loadEventsRequest() {
    return {
        type: LOAD_EVENTS_REQUEST
    }
}

export function loadEventsSuccess(events) {
    return {
        type: LOAD_EVENTS_SUCCESS,
        payload: events
    }
}

export function loadEventsError(error) {
    return {
        type: LOAD_EVENTS_ERROR,
        payload: error
    }
}

export const fetchEvents = () => (dispatch) => {
    dispatch(loadEventsRequest());
    const allEvents = db.collection("events");
    const eventsData = [];
    allEvents
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                eventsData.push(doc.data());
            });
            dispatch(loadEventsSuccess(eventsData));
        })
        .catch(error => {
            dispatch(loadEventsError(error));
        });
}