import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap } from './google-map';
import classes from './homepage.module.scss';

export const Homepage = (props) => {
    return (
        <div className={classes.container} >
            <GoogleMap />
        </div>
    )
}

