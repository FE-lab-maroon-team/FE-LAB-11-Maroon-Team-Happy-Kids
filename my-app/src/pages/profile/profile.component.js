import React from 'react';
// import PropTypes from 'prop-types';
import { MyWishes } from './my-wishes';
import styles from './profile.module.scss';

export const Profile = (props) => {
return(
    <div className={styles.container_my_wishes}>
        <MyWishes />
    </div>
)
}



