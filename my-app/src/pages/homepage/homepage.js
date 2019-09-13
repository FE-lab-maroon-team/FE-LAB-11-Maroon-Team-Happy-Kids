import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap } from './google-map';
import styles from './homepage.css';

export const Homepage = (props) => {
    return (
        <>
        <div className="homepage">
            Homepage content...
        </div>
        <div>
            <GoogleMap />
        </div>
        </>
    )
}

Homepage.propTypes = {
    message: PropTypes.string.isRequired,
}
