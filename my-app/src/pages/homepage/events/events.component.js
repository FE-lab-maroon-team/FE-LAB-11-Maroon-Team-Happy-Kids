import React from "react";
import { Button } from "../../../public-components/button";
import { Spinner } from "../../../public-components/spinner";
import { Portal } from '../../../public-components/portal/index';
import styles from "./events.module.scss";
import { convertToDate } from "../../../libs/helpers/convertToDate";
import { getEvents, getEventsPending, getEventsError } from '../../../reducers/eventsReducer';
import { connect } from 'react-redux'
<<<<<<< HEAD
import { Donate } from '../../../public-components/popap/donation/index';
=======

>>>>>>> 5da614af6d9fe82295232c6e81fa764e96b953aa


class EventComponent extends React.Component {

  render(){ 
  const { events } = this.props;
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
<<<<<<< HEAD
          <div className={styles.button} >
            {firstEvent.donated && <Button  text="Детальніше..." />}
=======
          <div className={styles.button}>
            {firstEvent.donated &&
              <Button onClick={() => {
                window.scrollTo(0, 0);
                this.props.history.push(`/events`)}}
                text="Переглянути всі" />}
>>>>>>> 5da614af6d9fe82295232c6e81fa764e96b953aa
          </div>
        </div>
      </div>
    </div>
   
  );
}
}
const mapStateToProps = (state) => ({
  events: getEvents(state),
  pending: getEventsPending(state),
  error: getEventsError(state)
})

const mapDispatchToProps = {}

export const Event = connect(mapStateToProps, mapDispatchToProps)(EventComponent);
