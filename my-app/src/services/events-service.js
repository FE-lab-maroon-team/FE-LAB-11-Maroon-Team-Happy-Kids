import { db } from '../firebase-config';
import { Component } from "react";
       

export default class EventsService extends Component {

    data = [];

    getEvents() {
        const allEvents = db.collection("events");
        return allEvents.get()
    }
};


