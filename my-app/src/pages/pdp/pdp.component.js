import React from 'react';
// import PropTypes from 'prop-types';
import { MyWishes } from './my-wishes';
import styles from './pdp.module.scss';

export const Pdp = (props) => {
return(
    <div className={styles.container_my_wishes}>
        <MyWishes />
    </div>
)
}



