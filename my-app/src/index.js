import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundry from './public-components/error-boundry';
import EventsService from './services/events-service';
import { EventsServiceProvider, EventsServiceConsumer } from './public-components/events-service-context';
import store from './store/store';
import  App from './public-components/app';


const eventsService = new EventsService();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <EventsServiceProvider value={eventsService}>
                <Router>
                    <App />
                </Router>
            </EventsServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.querySelector('#root')
);
