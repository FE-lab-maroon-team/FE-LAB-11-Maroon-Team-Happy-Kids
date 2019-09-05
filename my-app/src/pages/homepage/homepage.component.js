import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './homepage.module.scss';

const Homepage = (props) => {
    <div>
        Hello from Homepage
    </div>
}

Homepage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Homepage