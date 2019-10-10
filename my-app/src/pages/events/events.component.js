import React, { useEffect } from "react";
import { Button } from "../../public-components/button";
import { fetchEvents } from "../../actions";
import { convertToDate } from "../../libs/helpers/convertToDate";
import { getEvents, getEventsPending, getEventsError } from "../../reducers/eventsReducer";
import { connect } from "react-redux";

import { Progress } from 'antd';
import 'antd/dist/antd.css';
import styles from "./events.module.scss";


function EventsListComponent(props) {
  useEffect(() => {
    props.fetchEvents();
  }, []);
  const {events} = props;
  return (
    <div className={styles.mainEventsBlock}>
      <h1>Найближчі події</h1>
      {events.map(event => (
        <div key={event.id} className={styles.eventBlock}>
          <div className={styles.eventImage}>
            <img src={event.imageUrl} alt={event.imageUrl}></img>
          </div>

          <div key={event.id} className={styles.eventDescription}>
            <h2>{event.name}</h2>
            <div>
              <p>
                Коли: <strong>{convertToDate(event.date.seconds)}</strong>
              </p>
              <p>
                Де: <strong>{event.address}</strong>
              </p>
            </div>
            <p>{event.description}</p>
            <div className={styles.progressButton}>
              <div className={styles.progress}>
                <Progress type="circle" percent={event.currentAmount} />
              </div>

              <div className={styles.button}>
                {event.donated && <Button text="Пожертвувати" />}
              </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: getEvents(state),
  pending: getEventsPending(state),
  error: getEventsError(state)
})

const mapDispatchToProps = {
  fetchEvents
}

export const Events = connect(mapStateToProps, mapDispatchToProps)(EventsListComponent);
