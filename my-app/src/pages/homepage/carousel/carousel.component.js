import React from "react";
import Slider from "react-slick";
import { withRouter } from "react-router";
import { db } from "../../../firebase-config";
import fetchUsers from "../../../libs/helpers/fetchUsers";
import {
  getUsers,
  getUsersPending,
  getUsersError
} from "../../../reducers/usersReducer";
import { store } from "../../../index";
import { Spinner } from "../../../public-components/spinner";
import { connect } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

class CarouselComponent extends React.Component {
  state = {
    allUsers: []
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     allUsers: []
  //   };
  // }

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
    //  fetchUsers();

    // if (store.getState().users.pending) {
    //   console.log("Spinner");
    // }

    // this.setState({
    //   allUsers: store.getState().users.users
    // });
    // console.log(this.state);
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

// const mapStateToProps = state => {
//   return {
//     error: getUsersError(state),
//     users: getUsers(state),
//     pending: getUsersPending(state)
//   };
// };

// connect(
//   mapStateToProps
// )(CarouselComponent);

export const Carousel = withRouter(CarouselComponent);
