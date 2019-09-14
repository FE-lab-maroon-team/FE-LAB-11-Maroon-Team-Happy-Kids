import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap } from './google-map';
import classes from './homepage.module.scss';
import { Description } from './description';
import { Events } from './events';

export const Homepage = (props) => {
    return (
        <div>
            <Description />
            <Events />
            <div className={classes.container_google_maps}>
                <GoogleMap />
            </div>
        </div>
    )
}

