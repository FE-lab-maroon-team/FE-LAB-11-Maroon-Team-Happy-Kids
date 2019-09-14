import React from "react";
import Slider from "react-slick";

import { db } from '../../../firebase-config';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const image = {
  borderRadius: '50%',
  backgroundSize: 'cover',
  height: '10rem',
  width: '10rem',
  background: 'center center',
  margin: '0 auto'
}

const heading = {
  textAlign: 'center',  
}

export class Carousel extends React.Component {

 state = {
   allUsers: []
 }

  componentDidMount() {
    const allUsers = db.collection('users');
    const usersData = [];
    allUsers.get().then(snapshot => {
      snapshot.forEach(doc => {
        usersData.push(doc.data());
      })
      this.setState({
        allUsers: usersData
      })
    })
  }

  renderItems(users) {
    return users.map(user => {
      const {name, photoUrl} = user;
      return (
        <div>
          <img style={image} src={photoUrl} alt="users_photo" id="slide-image"></img>
          <h3 style={heading}>{name}</h3>
        </div>
      )
    })
  }

  render() {
    const settings = {
      slidesToShow: 4,
      infinite: false,
      swipeToSlide: true,
      dots: true,
      lazyLoad: true,
      draggable: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }
      ]
  };

    return (
      <div>
        <Slider {...settings}>
        {this.renderItems(this.state.allUsers)}
        </Slider>
      </div>
    );
  }
}