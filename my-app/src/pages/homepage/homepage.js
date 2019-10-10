import React, { useEffect } from 'react';
import { GoogleMap } from './google-map';
import { Carousel } from './carousel';
import { Description } from './description';
import { Event } from './events';
import { connect } from 'react-redux';
<<<<<<< HEAD
import { fetchEvents, fetchUsers } from '../../actions';
=======
import { fetchEvents, fetchUsers} from '../../actions';
>>>>>>> dcb53d21a804b77ff42ce1b1f1bb69f8092377e6


const HomepageComponent = (props) => {
    useEffect(() => {
        props.fetchUsers();
    }, [])
    useEffect(() => {
        props.fetchEvents();
    }, [])
    useEffect(() => {
        props.fetchUsers();
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