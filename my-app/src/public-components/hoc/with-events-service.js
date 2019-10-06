import React from 'react';
import { EventsServiceConsumer } from '../events-service-context';


const withEventsService = () => (Wrapped) => {
    return (props) => {
        return (
            <EventsServiceConsumer>
               {
                   (eventsService) => {
                        return (<Wrapped {...props} 
                        eventsService={eventsService} />)
                   }
               } 
            </EventsServiceConsumer>
        );
    } 
};

export default withEventsService;