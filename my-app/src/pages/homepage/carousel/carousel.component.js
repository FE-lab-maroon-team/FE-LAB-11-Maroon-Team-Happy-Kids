import React from "react";
import Slider from "react-slick";
import { createBrowserHistory as createHistory } from 'history';

import { db } from '../../../firebase-config';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss';

export class Carousel extends React.Component {

  history = createHistory(this.props);

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

  onItemSelected(userId) {
    console.log(userId);
    this.history.push(`/profile/${userId}`);
  }

  renderItems(users) {
    return users.map(user => {
      const {name, photoUrl, id} = user;
      return (
        <div>
          <img onClick={() => this.onItemSelected(id)} src={photoUrl} alt="users_photo" id="slide-image"></img>
          <h3>{name}</h3>
        </div>
      )
    })
  }

  render() {
    const settings = {
      slidesToShow: 3,
      infinite: false,
      swipeToSlide: true,
      dots: false,
      draggable: true,
      arrows: true,
      nextArrow: '',
      prevArrow: '',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
          }
        }
      ]
  };

    return (
      <Slider {...settings}>
      {this.renderItems(this.state.allUsers)}
      </Slider>
    );
  }
}