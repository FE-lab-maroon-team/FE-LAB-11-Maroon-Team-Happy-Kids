import React, { Component } from 'react';
import styles from './my-wishes.module.scss';
import { Button } from '../../../public-components/button'

export class MyWishes extends Component {
    render() {
        return (
            <div className={styles.mainMyWishes}>
                <h1>Мої бажання</h1>
                <div className={styles.myWishes}>
                    <div className={styles.col_4}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71r%2BAUuk9nL._SL1500_.jpg" alt="Фото подарунка1" />
                        <div className={styles.myWishesDetails}>
                            <div className={styles.subjectDetails}>
                                <div className={styles.myWishesText}>
                                    <p>Ціна</p>
                                    <p>Країна виробник</p>
                                </div>
                                <div className={styles.myWishesPrice}>
                                    <p>300$</p>
                                    <p>Germany</p>
                                </div>
                            </div>
                            <div className={styles.myWishesDescribe}>
                                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                <Button text="Подарувати" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.col_4}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71r%2BAUuk9nL._SL1500_.jpg" alt="Фото подарунка2" />
                        <div className={styles.myWishesDetails}>
                            <div className={styles.subjectDetails}>
                                <div className={styles.myWishesText}>
                                    <p>Ціна</p>
                                    <p>Країна виробник</p>
                                </div>
                                <div className={styles.myWishesPrice}>
                                    <p>300$</p>
                                    <p>Germany</p>
                                </div>
                            </div>
                            <div className={styles.myWishesDescribe}>
                                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                <Button text="Подарувати" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.col_4}>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/71r%2BAUuk9nL._SL1500_.jpg" alt="Фото подарунка3" />
                        <div className={styles.myWishesDetails}>
                            <div className={styles.subjectDetails}>
                                <div className={styles.myWishesText}>
                                    <p>Ціна</p>
                                    <p>Країна виробник</p>
                                </div>
                                <div className={styles.myWishesPrice}>
                                    <p>300$</p>
                                    <p>Germany</p>
                                </div>
                            </div>
                            <div className={styles.myWishesDescribe}>
                                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                <Button text="Подарувати" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}