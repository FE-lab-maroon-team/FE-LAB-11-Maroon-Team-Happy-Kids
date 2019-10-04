import React from "react";
import Slider from "react-slick";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUsers, getUsersPending, getUsersError } from "../../../reducers/usersReducer";
import { loadUsersRequest, loadUsersSuccess, loadUsersError } from '../../../actions/usersAction';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

class CarouselComponent extends React.Component {

  onItemSelected(userId) {
    this.props.history.push(`/profile/${userId}`);
  };

  renderItems(users) {
    return users.map(user => {
      const { name, photoUrl, id } = user;
      return (
        <div key={id}>
          <img
            onClick={() => this.onItemSelected(id)}
            src={photoUrl}
            alt="users_photo"
            id="slide-image"
          ></img>
          <h3>{name}</h3>
        </div>
      );
    });
  };

  render() {
    const settings = {
      slidesToShow: 3,
      infinite: false,
      swipeToSlide: true,
      dots: false,
      draggable: true,
      arrows: true,
      nextArrow: "",
      prevArrow: "",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <Slider {...settings}>{this.renderItems(this.props.users)}</Slider>
    );
  }
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pending: getUsersPending(state),
  error: getUsersError(state)
})

const mapDispatchToProps = {
  loadUsersRequest,
  loadUsersSuccess,
  loadUsersError
}

export const Carousel = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CarouselComponent)

