import React, { Component } from 'react';
import styles from './my-wishes.module.scss';
import { db } from '../../../firebase-config';
import { Portal } from '../../../public-components/portal/index';
import { Spinner } from '../../../public-components/spinner';
import {Button} from '../../../public-components/button';
import{showPopup,hidePopup} from '../../../actions';

import {connect} from 'react-redux';

class MyWishesOption extends Component {
    state = {
        user: null,
        showModal: false
    }
    MessageClick = () => this.setState({ showModal: true });
    handleCloseModal = () => this.setState({ showModal: false });
    
    
    
    componentDidMount() {
        let documentRef = db.collection('users').doc(this.props.userId);
        documentRef.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log('No such document!');
                } else {
                    this.setState({
                        user: doc.data()
                    })
                }
            });
    }
    render() {
        const {isPopupOpen, selectedWishesId, showPopup, hidePopup} = this.props;
        if (!this.state.user) {
            return <Spinner />
        }
        
    
        const {wishes} = this.state.user;
        if (wishes.length === undefined) {
            return (
                <div className={styles.noWishes}>
                    <h3>Вибачте. Побажань для цієї дитини не знайдено.</h3>
                </div>
            )
        }
        return (
            <div className={styles.mainMyWishes}>
                <h1>Мої бажання</h1>
                <div className={styles.myWishes}>
                    {wishes.map(({ name, price, description, presentUrl, country,id }) => (
                        <div className={styles.col_4} key={price}>
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
                                    <button onClick={() => showPopup(id)} className={styles.buttonPresent}>Подарувати</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {isPopupOpen && (
                    <Portal onClose={() => hidePopup()}>
                        <div className="confirmation">
                            <p>Ви дійсно хочете подарувати цей подарунок?</p>
                            <div>
                                <Button text="Так" />
                                <Button text="Ні" onClick={hidePopup}/>
                            </div>
                        </div>
                    </Portal>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        isPopupOpen: state.wishes.isPopupOpen,
        selectedWishesId: state.wishes.selectedWishesId
    }
}
const mapDispatchToProps = {
    showPopup,
    hidePopup
}

export const MyWishes = connect(mapStateToProps,mapDispatchToProps)(MyWishesOption)