import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap } from './google-map';
import styles from './homepage.module.scss';
import { Carousel } from './carousel';
import classes from './homepage.module.scss';
import { Description } from './description';
import { Events } from './events';


export const Homepage = (props) => {
    return (
        <>
        <div className="homepage">
            Homepage content...
        </div>
        <div>
            <Description />
            <Events />
            <Carousel />
            <div className={classes.container_google_maps}>
                <GoogleMap />
            </div>
        </div>
        
        </>
    )
}