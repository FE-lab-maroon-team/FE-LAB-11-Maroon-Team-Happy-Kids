import React from 'react';
import { convertToDate } from "../../libs/helpers/convertToDate";
import { Button } from "../../public-components/button";
import styles from './event-list-item.module.scss';

const EventListItem = ({ eveent, onDonateForEvent }) => {
    const { imageUrl, name, date, address, description, donated } = eveent;
    return (
      <>
        <div className={styles.eventImage}>
            <img src={imageUrl} alt="image"></img>
        </div>

        <div key={imageUrl} className={styles.eventDescription}>
            <h2>{name}</h2>
            <div>
              <p>
                Коли: <strong>{convertToDate(date.seconds)}</strong>
              </p>
              <p>
                Де: <strong>{address}</strong>
              </p>
            </div>
            <p >{description}</p>
            <div className={styles.button}
            onClick={onDonateForEvent} >
              { donated && <Button text="Пожертвувати" /> }
            </div>
        </div>
      </>
    )
};

export default EventListItem;