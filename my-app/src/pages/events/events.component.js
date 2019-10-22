import React, { useEffect , useState } from "react";
import { Button } from "../../public-components/button";
import { fetchEvents } from "../../actions";
import { convertToDate } from "../../libs/helpers/convertToDate";
import { Portal } from '../../public-components/portal/index';
import { Donation } from '../../public-components/popap/donation/index';
import { getEvents, getEventsPending, getEventsError } from "../../reducers/eventsReducer";
import { connect } from "react-redux";

import { Progress } from 'antd';
import 'antd/dist/antd.css';
import styles from "./events.module.scss";


function EventsListComponent(props) {
  const [showModal , handleMessageClick] = useState(false);
  const [ selectedEventId , setSelectId ] = useState('');
  const [selectedTotalAmount, setTotalAmount] = useState(0);
  const [selectedCurrentAmount, setCurrentAmount] = useState(0);

  const handleClick = (eventId,eventCurrentSum,eventTotalSum) =>{
    handleMessageClick(true);
    setSelectId(eventId);
    setTotalAmount(eventTotalSum);
    setCurrentAmount(eventCurrentSum);
  }
  const handleClosePopap = () =>{
    handleMessageClick(false);
  }
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
                  <Progress type="circle" strokeColor={{
                    '0%': '#e9e210',
                    '100%': '#e96e10',
                    }}
                    width={100}
                    percent={event.currentAmount*100/event.totalAmount} 
                  />
                  <div><h4>{
                    event.currentAmount*100/event.totalAmount < 100 ? "Зібрано коштів:" : "Кошти зібрано!"
                    }</h4></div>

              </div>
              <div className={styles.button}>
                {event.donated && <Button onClick={() =>handleClick(event.id,event.currentAmount,event.totalAmount)} text="Пожертвувати" />}
              </div>
            </div> 
          </div>
          {showModal  && (
            <Portal onClose={handleClosePopap}> 
             <Donation selectedEventId={selectedEventId} currentAmount={selectedCurrentAmount} totalAmount={selectedTotalAmount}/>       
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
