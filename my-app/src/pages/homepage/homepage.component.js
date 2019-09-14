import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap } from './google-map';
import styles from './homepage.module.scss';
import { Carousel } from './carousel';

export const Homepage = (props) => {
    return (
        <div>
            <GoogleMap />
            <Carousel />
        </div>
    )
}

Homepage.propTypes = {
    message: PropTypes.string.isRequired,
}
