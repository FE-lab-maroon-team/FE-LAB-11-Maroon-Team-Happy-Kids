export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_PENDING = 'LOAD_EVENTS_PENDING';
export const LOAD_EVENTS_ERROR = 'LOAD_EVENTS_ERROR';

export function loadEventsSuccess(events) {
    return {
        type: LOAD_EVENTS_SUCCESS,
        payload: events
    }
}

export function loadEventsError(error) {
    return {
        type: LOAD_EVENTS_ERROR,
        error: error
    }
}