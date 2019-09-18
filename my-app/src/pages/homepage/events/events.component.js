import React, { useEffect, useState } from "react";
import { Button } from '../../../public-components/button'
import { db } from '../../../firebase-config';
import styles from './events.module.scss';

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

function Events() {
        const events = useEvents();
        let i = 0;
        const name= [],
            id = [],
            address =[],
            img = [],
            description = [],
            date = [],
            donated = [];
        events.map((event) => {
            name[i] = event.name;
            id[i] = event.id;
            address[i] = event.address;
            img[i] = event.imageUrl;
            description[i] = event.description;
            date[i] = event.date.seconds;
            donated[i] = event.donated;
            i++;
        });
        return(
            <div className={styles.eventBlock}>
                <div className={styles.eventImage}>
                    <img src={img[0]} alt='charity meeting'></img>
                </div>
                <div className={styles.eventDescription}>
                    <div>
                        <h2>{name[0]}</h2>
                        <div>
                            <p>Коли: <strong>{convertToDate(date[0])}</strong></p>
                            <p>Де: <strong>{address[0]}</strong></p>
                        </div>
                        <p>{description[0]}</p>
                        <div className={styles.button} >
                                {donated[0] && (
                                        <Button text='Детальніше...'/>
                                    )}
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

export default Events