import React from "react";
import Slider from "react-slick";
import { withRouter } from "react-router";
import fetchUsers from "../../../libs/helpers/fetchUsers";
import { store } from "../../../index";
import { Spinner } from "../../../public-components/spinner";
import { connect } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      pending: false
    };
  }

  componentDidMount() {
    
    fetchUsers();

    store.subscribe(() => {
      this.setState({
        allUsers: store.getState().users.users,
        pending: store.getState().users.pending,
      });
    })
  }

  onItemSelected(userId) {
    this.props.history.push(`/profile/${userId}`);
  }

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
  }

  render() {
    if (store.getState().users.pending) {
      return <Spinner />;
    }
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
      <Slider {...settings}>{this.renderItems(this.state.allUsers)}</Slider>
    );
  }
}

export const Carousel = withRouter(CarouselComponent);
