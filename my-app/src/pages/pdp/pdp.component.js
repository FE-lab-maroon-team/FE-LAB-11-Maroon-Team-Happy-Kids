import React from 'react';
import PropTypes from 'prop-types';

import classes from './pdp.module.scss';

export const Pdp = (props) => {
return(
    <div>
        Hello from Pdp
    </div>
)
}

Pdp.propTypes = {
    message: PropTypes.string.isRequired,
}

