import React, { useEffect } from 'react';
import { GoogleMap } from './google-map';
import { Carousel } from './carousel';
import { Description } from './description';
import { Event } from './events';
import { connect } from 'react-redux';
import { fetchEvents, fetchUsers} from '../../actions';


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