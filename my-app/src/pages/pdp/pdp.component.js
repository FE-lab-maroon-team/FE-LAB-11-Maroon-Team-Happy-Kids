import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './pdp.module.scss';

const Pdp = (props) => {
    <div>
        Hello from Pdp
    </div>
}

Pdp.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Pdp