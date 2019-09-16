import React, { useState, useEffect } from 'react'
import styles from './events.module.scss'
import { Button } from '../../public-components/button'

import { db } from '../../firebase-config';

function useEvents() {
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

function convertToDate(date) {
    const milisec = 1000;
    return new Date((date*milisec)).toLocaleDateString('en-GB');
}

const EventsList = () => {

    const events = useEvents();

    return (
        <div className={styles.mainEventsBlock}>
            <h1>Найближчі події</h1>
                    {events.map((event) =>
                        <div key={event.id} className={styles.eventBlock}>
                            <div className={styles.eventImage}>
                                <img src={event.imageUrl}></img>
                            </div>

                            <div key={event.id} className={styles.eventDescription}>
                                <h2>{event.name}</h2>
                                <div>
                                    <p>Коли: <strong>{convertToDate(event.date.seconds)}</strong></p>
                                    <p>Де: <strong>{event.address}</strong></p>
                                </div>
                                <p>{event.description}</p>
                                <div className={styles.button} >
                                    {event.donated && (
                                        <Button text='Donate'/>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
            </div>
    )
}

export default EventsList