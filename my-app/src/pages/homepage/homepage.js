import React, { useEffect } from 'react';
import { GoogleMap } from './google-map';
import styles from './homepage.module.scss';
import { Carousel } from './carousel';
import { Description } from './description';
import { Events } from './events';
import { getUsers } from '../../redux/actions/user-action'
import { connect } from 'react-redux';


const HomepageComponent = (props) => {
  useEffect(() => {
      props.getUsers();
  },[])
    return (
        <div>
            <Description />
            <Events />
            <Carousel />
            <GoogleMap />
        </div>
    )
}

const mapDispatchToProps = {
    getUsers
}

export const Homepage = connect(null,mapDispatchToProps)(HomepageComponent);
