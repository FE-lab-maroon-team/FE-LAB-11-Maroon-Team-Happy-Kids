import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap } from './google-map';
import styles from './homepage.module.scss';

export const Homepage = (props) => {
    return (
        <div>
            <GoogleMap />
        </div>
    )
}

