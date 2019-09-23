import React from 'react';
import { MyWishes } from './my-wishes';
import { withRouter } from 'react-router';
import { AboutMeComponent } from './AboutMe/index';
import styles from './profile.module.scss';

 const ProfileComponent = ({userId, history}) => {
return(
    <div className={styles.container_my_wishes}>
        <AboutMeComponent userId = { userId } history = { history }/>
        <MyWishes />   
    </div>
)
}
export const Profile =  withRouter(ProfileComponent);