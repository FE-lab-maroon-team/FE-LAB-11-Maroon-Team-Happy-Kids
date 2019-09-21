import React from "react";
import { Button } from "../../../public-components/button";
import { Spinner } from "../../../public-components/spinner";
import styles from "./events.module.scss";
import { convertToDate } from "../../../libs/helpers/convertToDate";
import { useEvents } from "../../../libs/helpers/useEvents";

function Events() {
  const events = useEvents();
  const [firstEvent, ...other] = events;

  if (firstEvent === undefined) {
    return <Spinner />;
  }
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

export default Events;
