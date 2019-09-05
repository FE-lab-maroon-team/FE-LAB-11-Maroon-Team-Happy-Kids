import React from 'react';
import PropTypes from 'prop-types';

import classes from './homepage.module.scss';

export const Homepage = (props) => {
    return(
    <div>
        Hello from Homepage
    </div>
    )
}

Homepage.propTypes = {
    message: PropTypes.string.isRequired,
}
