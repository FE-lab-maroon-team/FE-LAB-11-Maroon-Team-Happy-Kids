import React, { useEffect } from 'react';
import { GoogleMap } from './google-map';
import styles from './homepage.module.scss';
import { Carousel } from './carousel';
import { Description } from './description';
import { Event } from './events';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/eventsAction'
import { fetchUsers } from '../../actions/usersAction'


const HomepageComponent = (props) => {
    useEffect(() => {
        props.fetchUsers();
    }, [])
    useEffect(() => {
        props.fetchEvents();
    }, [])
    return (
        <div>
            <Description />
            <Event />
            <Carousel />
            <GoogleMap />
        </div>
    )
}

const mapDispatchToProps = {
    fetchEvents,
    fetchUsers
}

export const Homepage = connect(null, mapDispatchToProps)(HomepageComponent);