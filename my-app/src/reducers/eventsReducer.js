import {LOAD_EVENTS_PENDING, LOAD_EVENTS_SUCCESS, LOAD_EVENTS_ERROR} from '../actions/eventsAction';

const initialState = {
    pending: false,
    events: [],
    error: null
}

export function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_EVENTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case LOAD_EVENTS_SUCCESS:
            return {
                ...state,
                pending: false,
                events: action.payload
            }
        case LOAD_EVENTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getEvents = state => state.events;
export const getEventsPending = state => state.pending;
export const getEventsError = state => state.error;