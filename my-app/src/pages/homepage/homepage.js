import React from 'react';
import { GoogleMap } from './google-map';
import styles from './homepage.module.scss';
import { Carousel } from './carousel';
import { Description } from './description';
import { Events } from './events';


export const Homepage = (props) => {
    return (
        <>
        <div>
            <Description />
            <Events />
            <Carousel />
            <div className={styles.container_google_maps}>
                <GoogleMap />
            </div>
        </div>
        
        </>
    )
}
