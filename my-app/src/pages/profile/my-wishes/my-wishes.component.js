import React, { useState, useEffect } from 'react';
import styles from './my-wishes.module.scss';
import { db } from '../../../firebase-config';
import { Button } from '../../../public-components/button'

function useWishes() {
    const [wishes, setEvents] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection('users')
            .onSnapshot((snapshot) => {
                const newEvent = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setEvents(newEvent);
            })

        return () => unsubscribe()
    }, [])

    return wishes
}
export const MyWishes = () => {
    const wishes = useWishes();
    return (
        <div className={styles.mainMyWishes}>
            <h1>Мої бажання</h1>
                <div className={styles.myWishes}>
                {wishes.map((wishe) =>
                    <div className={styles.col_4}>
                        <img src={wishe.photoUrl} alt="Фото подарунка"></img>
                        <div className={styles.myWishesDetails}>
                            <h3>{wishe.wishes.name}</h3>
                            <div className={styles.subjectDetails}>
                                
                                <div className={styles.myWishesText}>
                                    <p>Ціна</p>
                                    <p>Країна виробник</p>
                                </div>
                                <div className={styles.myWishesPrice}>
                                    <p>{wishe.wishes.price}</p>
                                    <p>{wishe.wishes.madeCountry}</p>
                                </div>
                            </div>
                            <div className={styles.myWishesDescribe}>
                                <p>{wishe.wishes.description}</p>
                                <Button text="Подарувати" className={styles.button}/>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
        </div>
    )
}
