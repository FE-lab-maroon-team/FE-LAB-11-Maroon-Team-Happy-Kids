import React, { useState, useEffect } from 'react'
import styles from './events.module.scss'
import EventCartTable from '../../public-components/events-cart-table';
import EventList from '../../public-components/event-list';


const EventsListHeader = () => {
    return (
        <div className={styles.mainEventsBlock}>
            <h1>Найближчі події</h1>
        </div> 
    );
};



const EventsList = () => {
    return (
        <>
            <EventsListHeader />
            <EventList />
            <EventCartTable />
        </>  
    );
};

export default EventsList;
