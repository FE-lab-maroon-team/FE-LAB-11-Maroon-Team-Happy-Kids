import React, { Component } from 'react';
import EventListItem from '../event-list-item';
import { connect } from 'react-redux';
import { withEventsService } from '../hoc';
import { fetchEvents, onDonateForEvent } from '../../actions';
import { compose } from '../../utils';
import { Spinner } from '../../public-components/spinner';
import ErrorIndicator from '../error-indicator';
import styles from './event-list.module.scss'


const EventList = ({events, onDonateForEvent}) => {
    return (
        <ul>
            {
                events.map((eveent) => {
                    return (
                        <li key={eveent.id} className={styles.eventBlock}>
                                <EventListItem eveent={eveent} 
                                onDonateForEvent={() => onDonateForEvent(eveent.id)} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

class EventListContainer extends Component {

    componentDidMount() { 
        this.props.fetchEvents();
    }

    render() {
        const { events, loading, error, onDonateForEvent } = this.props;
        
        if (loading) {
            return (
                <Spinner />
            )
        };

        if (error) {
            return <ErrorIndicator />;
        }

        return <EventList events={events} onDonateForEvent={onDonateForEvent}/>
    }
};



const mapStateToProps = ({ events, loading, error }) => {
    return { events, loading, error };
};

const mapDispatchToProps = (dispatch, {eventsService}) => { // eventsService from ownProps
    return {
        fetchEvents: fetchEvents( eventsService, dispatch),
        onDonateForEvent: (id) => dispatch(onDonateForEvent(id))
    };
};


export default compose(
    withEventsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(EventListContainer);
