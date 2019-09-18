import React from 'react';
import { GoogleMap } from './google-map';
import styles from './homepage.module.scss';
import { Carousel } from './carousel';
import { Description } from './description';
import { Events } from './events';


export const Homepage = (props) => {
    return (
        <div>
            <Description />
            <Events />
            <Carousel />
            <GoogleMap />
        </div>
    )
}
