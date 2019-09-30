import React from 'react';
import { GoogleMap } from './google-map';
import styles from './homepage.module.scss';
import { Carousel } from './carousel';
import { Description } from './description';
import { Events } from './events';
import { fetchUsers } from '../../libs/helpers/fetchUsers' 


export const Homepage = (props) => {
    fetchUsers();
    return (
        <div>
            <Description />
            <Events />
            <Carousel />
            <GoogleMap />
        </div>
    )
}
