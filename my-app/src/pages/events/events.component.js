import React, { useEffect , useState } from "react";
import styles from "./events.module.scss";
import { Button } from "../../public-components/button";
import { fetchEvents } from "../../actions";
import { convertToDate } from "../../libs/helpers/convertToDate";
import { Portal } from '../../public-components/portal/index';
import { Donation } from '../../public-components/popap/donation/index';
import { getEvents, getEventsPending, getEventsError } from "../../reducers/eventsReducer";
import { connect } from "react-redux";

function EventsListComponent(props) {
  const [showModal , handleMessageClick] = useState(false);
  const [ selectedEventId , setSelectId ] = useState('');
  const handleClick = (eventId) =>{
    handleMessageClick(true);
    setSelectId(eventId);
  }
  const handleClosePopap = () =>{
    handleMessageClick(false);
  }
  useEffect(() => {
    props.fetchEvents();
  }, [])
  const {events} = props;
  return (
    <div className={styles.mainEventsBlock}>
      <h1>Найближчі події</h1>
      {events.map(event => (
        <div key={event.id} className={styles.eventBlock}>
          <div className={styles.eventImage}>
            <img src={event.imageUrl}></img>
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
            <div className={styles.button} >
              {event.donated && <Button onClick ={() => handleClick(event.id)} text="Пожертвувати" />}
            </div>
          </div>
          {showModal  && (
            <Portal onClose={handleClosePopap}> 
             <Donation selectedEventId={selectedEventId}/>       
            </Portal>
          )}
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