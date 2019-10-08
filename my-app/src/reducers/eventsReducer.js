import {LOAD_EVENTS_REQUEST, LOAD_EVENTS_SUCCESS, LOAD_EVENTS_ERROR} from '../actions/eventsAction';

const initialState = {
    pending: false,
    events: [],
    error: null
}

export function eventsReducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_EVENTS_REQUEST: 
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
                error: action.payload
            }
        default: 
            return state;
    }
}


const getEventsReducer = state => state.events;

export const getEvents = state => getEventsReducer(state).events;
export const getEventsPending = state => getEventsReducer(state).pending;
export const getEventsError = state => getEventsReducer(state).error;