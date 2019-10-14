import React, { Component } from 'react';
import styles from './my-wishes.module.scss';
import { db } from '../../../firebase-config';
import { Portal } from '../../../public-components/portal/index';
import { Button } from '../../../public-components/button';
import {Spinner} from '../../../public-components/spinner';

export class MyWishes extends Component {
    state = {
        user: null,
        showModal: false
    }
    handleShowMessageClick = () => this.setState({showModal: true})
    handleCloseModal = () => this.setState({showModal: false})

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
        if(!this.state.user){
            return <Spinner />
        }
        const {wishes} = this.state.user;        
        return (
            <div className={styles.mainMyWishes}>
                <h1>Мої бажання</h1>
                <div className={styles.myWishes}>
                {wishes.map(({name, price, description, presentUrl, country}) =>(
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
                                    <p>{price}</p>
                                    <p>{country}</p>
                                </div>
                            </div>
                            <div className={styles.myWishesDescribe}>
                                <p>{description}</p>
                                <Button text="Подарувати" onClick={this.handleShowMessageClick} className={styles.button} />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {this.state.showModal  && (
            <Portal onClose={this.handleCloseModal}>        
            </Portal>
          )}
            </div>
        )
    }
}