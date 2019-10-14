import React from "react";
import "./aboutPrf.scss";
import { Spinner } from "../../../public-components/spinner/index";
import { db } from "../../../firebase-config";

export class AboutMeComponent extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    let docRef = db.collection("users").doc(this.props.userId);
    docRef.get().then(doc => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        this.setState({
          user: doc.data()
        });
      }
    });
  }
  render() {
    if (!this.state.user) {
      return <Spinner />;
    }
    const { photoUrl, name, surname, description, birthday } = this.state.user;
    return (
      <div className="container_aboutMe">
        <h2 className="aboutMe_title">Про мене</h2>
        <div className="aboutMe_container">
          <div className="aboutMe_photo">
            <img src={photoUrl} alt="children_photo" />
          </div>
          <div className="aboutMe_description">
            <ul>
              <li>
                <span className="items_name">Ім'я:</span> {name}
              </li>
              <li>
                <span className="items_surname">Прізвище:</span> {surname}
              </li>
              <li>
                <span className="items_age">Дата народження:</span> {birthday}
              </li>
              <li>
                <span className="items_description">Про мене:</span> {description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
