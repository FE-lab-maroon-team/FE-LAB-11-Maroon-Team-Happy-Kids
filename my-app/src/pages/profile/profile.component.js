import React from 'react';
import { MyWishes } from './my-wishes';
import { AboutMeComponent } from './AboutMe/index';
import styles from './profile.module.scss';

export const Profile = () => {
return(
    <div className={styles.container_my_wishes}>
        <AboutMeComponent />
        <MyWishes />
        
    </div>
)
}
