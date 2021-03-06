import React, { Component } from "react";
import styles from "./my-wishes.module.scss";
import { db } from "../../../firebase-config";
import { Portal } from "../../../public-components/portal/index";
import { Spinner } from "../../../public-components/spinner";
import { Button } from "../../../public-components/button";
import { showPopup, hidePopup } from "../../../actions";

import { connect } from "react-redux";

class MyWishesOption extends Component {
  state = {
    user: null
  };
  componentDidMount() {
    let documentRef = db.collection("users").doc(this.props.userId);
    documentRef.get().then(doc => {
      if (!doc.exists) {
        console.log("No such document!");
      } else {
        this.setState({
          user: doc.data()
        });
      }
    });
  }

  checkWishInDB = () => {
    const userId = this.props.userId;
    const selectedWish = this.props.selectedWishesId;
    const docRef = db.collection("users").doc(this.props.userId);
    docRef
      .get()
      .then(doc => {
        let wishesarr = doc.data().wishes;
        wishesarr.forEach(obj => {
          if (obj.hasOwnProperty("isActive")) {
            if (obj.id === selectedWish) {
              obj["isActive"] = false;
              this.updateWishInDB(wishesarr, userId);
              this.updateState();
            }
          }
        });
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });
  };

  updateWishInDB = (wishes, userId) => {
    const docRef = db.collection("users").doc(userId);
    docRef.update({ wishes });
  };
  
  updateState = () => {
    let documentRef = db.collection("users").doc(this.props.userId);
    documentRef.get().then(doc => {
        this.setState({
          user: doc.data()
        });
    });
  }

  render() {
    const { isPopupOpen, selectedWishesId, showPopup, hidePopup } = this.props;
    if (!this.state.user) {
      return <Spinner />;
    }
    const { wishes } = this.state.user;
    if (wishes.length === undefined) {
      return (
        <div className={styles.noWishes}>
          <h3>Вибачте. Побажань для цієї дитини не знайдено.</h3>
        </div>
      );
    }
    return (
      <div className={styles.mainMyWishes}>
        <h1>Мої бажання</h1>
        <div className={styles.myWishes}>
          {wishes.map(
            ({
              name,
              price,
              description,
              presentUrl,
              country,
              id,
              isActive
            }) => (
              <div
                className={styles.col_4}
                key={id}
              >
                <img src={presentUrl} alt="Фото подарунка"></img>
                <div className={styles.myWishesDetails}>
                  <h3>{name}</h3>
                  <div className={styles.subjectDetails}>
                    <div className={styles.myWishesText}>
                      <p>Ціна</p>
                      <p>Країна виробник</p>
                    </div>
                    <div className={styles.myWishesPrice}>
                      <p>{price} грн.</p>
                      <p>{country}</p>
                    </div>
                  </div>
                  <div className={styles.myWishesDescription}>
                    <p>{description}</p>
                    <button
                      className={styles.buttonPresent}
                      disabled={!isActive}
                      onClick={() => showPopup(id)} 
                    >
                      Подарувати
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {isPopupOpen && (
          <Portal onClose={() => hidePopup()}>
            <div className="confirmation">
              <p style={{color: 'black', padding: '25px 25px 5px 25px'}}>Ви дійсно хочете подарувати цей подарунок?</p>
              <div style={{padding: '10px'}}>
                <Button text="Так" onClick={() => {
                    this.checkWishInDB();
                    hidePopup()
                    }} />
                <Button text="Ні" onClick={hidePopup} />
              </div>
            </div>
          </Portal>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isPopupOpen: state.wishes.isPopupOpen,
    selectedWishesId: state.wishes.selectedWishesId
  };
};
const mapDispatchToProps = {
  showPopup,
  hidePopup
};

export const MyWishes = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWishesOption);
