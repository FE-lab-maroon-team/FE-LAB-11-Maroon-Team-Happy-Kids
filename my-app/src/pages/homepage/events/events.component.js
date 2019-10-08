import React from "react";
import { Button } from "../../../public-components/button";
import { Spinner } from "../../../public-components/spinner";
import styles from "./events.module.scss";
import { convertToDate } from "../../../libs/helpers/convertToDate";
import { getEvents, getEventsPending, getEventsError } from '../../../reducers/eventsReducer';
import { connect } from 'react-redux'

function EventComponent({ events }) {

  if (events.length === 0) {
    return <Spinner />;
  }
  const firstEvent = events[0];
  return (
    <div className={styles.eventBlock}>
      <div className={styles.eventImage}>
        <img src={firstEvent.imageUrl} alt="charity meeting"></img>
      </div>
      <div className={styles.eventDescription}>
        <div>
          <h2>{firstEvent.name}</h2>
          <div>
            <p>
              Коли: <strong>{convertToDate(firstEvent.date.seconds)}</strong>
            </p>
            <p>
              Де: <strong>{firstEvent.address}</strong>
            </p>
          </div>
          <p>{firstEvent.description}</p>
          <div className={styles.button}>
            {firstEvent.donated && <Button text="Детальніше..." />}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  events: getEvents(state),
  pending: getEventsPending(state),
  error: getEventsError(state)
})

const mapDispatchToProps = {}

export const Event = connect(mapStateToProps, mapDispatchToProps)(EventComponent);
