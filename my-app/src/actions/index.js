import { db } from "../firebase-config";


const eventsLoaded = (newEvents) => {
    return {
        type: 'FETCH_EVENTS_SUCCESS',
        payload: newEvents
    };
};

const eventsRequested = () => {
    return {
        type: 'FETCH_EVENTS_REQUEST',
    };
};

const eventsError = (error) => {
    return {
        type: 'FETCH_EVENTS_FAILURE',
        payload: error
    };
};

export const onDonateForEvent = (eventId) => {
    return {
        type: 'ON_DONATE_FOR_EVENT',
        payload: eventId
    }
};

const fetchEvents = (eventsService, dispatch) => () => {
    dispatch(eventsRequested());
    const data = [];
    eventsService.getEvents()
    .then(snapshot => {
        snapshot.forEach(doc => {
            data.push(doc.data());
        });
        dispatch(eventsLoaded(data));
        })
    .catch((err) => dispatch(eventsError(err)));
}

export {
    fetchEvents
};
