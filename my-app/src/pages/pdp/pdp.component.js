import React from 'react';
import PropTypes from 'prop-types';
import { AboutMeComponent } from './AboutMe/index'

import './pdp.module.scss';

export const Pdp = (props) => {
return(
    <div className="container_Pdp">
        Hello from Pdp
    </div>
)
}

Pdp.propTypes = {
    message: PropTypes.string.isRequired,
}

