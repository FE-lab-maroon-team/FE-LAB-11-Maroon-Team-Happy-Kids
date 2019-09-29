import { useEffect, useState } from "react";
import { db } from '../../firebase-config';
import { productsReducer, getEvents} from '../../reducers/eventsReducer'
import { loadEventsSuccess } from '../../actions/eventsAction'

export const useEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const unsubscribe = db
        .collection('events')
        .onSnapshot((snapshot) => {
            const newEvent = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            setEvents(newEvent);
        })

        return () => unsubscribe()
    }, [])
    return events
}