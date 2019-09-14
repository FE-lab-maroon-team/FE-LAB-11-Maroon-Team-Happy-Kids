import React from 'react';
import PropTypes from 'prop-types';
import { AboutMeComponent } from './AboutMe/index'

import styles from './pdp.module.scss';

export const Pdp = (props) => {
return(
    <div className={styles.container_Pdp}>
       <AboutMeComponent />
    </div>
)
}

Pdp.propTypes = {
    message: PropTypes.string.isRequired,
}

