import React, { useState, useEffect } from 'react'
import styles from './events.module.scss'
import { Button } from '../../public-components/button'

import { convertToDate } from  '../../libs/helpers/convertToDate'
import { useEvents } from '../../libs/helpers/useEvents'

import { configureStore } from '../../store/configureStore';
import { loadEventsSuccess } from '../../actions/eventsAction'


const EventsList = () => {
    const store = configureStore();
    const events = useEvents();
    store.dispatch(loadEventsSuccess(events));
    console.log(loadEventsSuccess(events));
    return (
        <div className={styles.mainEventsBlock}>
            <h1>Найближчі події</h1>
                    {events.map((event) =>
                        <div key={event.id} className={styles.eventBlock}>
                            <div className={styles.eventImage}>
                                <img src={event.imageUrl} alt="Фото1"></img>
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
                                        <Button text='Пожертвувати'/>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
            </div>
    )
}

export default EventsList