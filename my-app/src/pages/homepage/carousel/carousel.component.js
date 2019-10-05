import React from "react";
import Slider from "react-slick";
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { getUsersRequest , getUsersSuccess , getUsersError } from '../../../redux/reducer/users';
import { userRequest , userSuccess , userFailure } from '../../../redux/actions/user-action'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss';
import { from } from "rxjs";

class CarouselComponent extends React.Component {

  
  onItemSelected(userId) {
    this.props.history.push(`/profile/${userId}`);
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

const mapStateToProps = (state) => ({
  users:getUsersSuccess(state),
  loading:getUsersRequest(state),
  error:getUsersError(state)
  
})

const mapDispatchToProps = {
  userRequest,
  userSuccess,
  userFailure
}

export const Carousel = compose(mapStateToProps,mapDispatchToProps,withRouter)(CarouselComponent);