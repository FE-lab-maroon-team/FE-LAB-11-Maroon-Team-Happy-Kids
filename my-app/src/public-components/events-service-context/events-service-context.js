import React from 'react';

const {
    Provider: EventsServiceProvider,
    Consumer: EventsServiceConsumer
} = React.createContext();

export {
    EventsServiceProvider, 
    EventsServiceConsumer
};