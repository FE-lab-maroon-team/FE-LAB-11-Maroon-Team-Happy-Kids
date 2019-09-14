import React, { Component } from "react";
import { Button } from '../../../public-components/button'
import MeetingPhoto from '../../../assets/images/meeting-photo.jpg';
import styles from './events.module.scss';

class Events extends Component {
    render() {
        return(
            <div className={styles.eventBlock}>
                <div className={styles.eventImage}>
                    <img src={MeetingPhoto} alt='charity meeting'></img>
                </div>
                <div className={styles.eventDescription}>
                    <div>
                        <h2>Благодійна зустріч</h2>
                        <div>
                            <p>Коли: <strong>01.10.2019</strong></p>
                            <p>Де: <strong>вул. Сахарова, 25, Львівська область, Львів</strong></p>
                        </div>
                        <p>
                            Організовано збір допомоги Дитячому будинку "Надія". Вихователі і діти 
                            будуть раді будь-якій допомозі. В них є потреба в теплих речах, взутті, 
                            одязі, канцтоварах, книгах, їжі, речах побуду, аудіо та відео техніці. 
                            Діти залюбки проведуть свій час на майстер-класах, навчальних та розважальних програмах.
                            Прийматьюся як нові речі так і вживані. Вклад кожного з нас допоможе іншій людині.
                            Не будь байдужим - допоможи!
                        </p>
                        <div className={styles.button} >
                        <Button text='More info...'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Events