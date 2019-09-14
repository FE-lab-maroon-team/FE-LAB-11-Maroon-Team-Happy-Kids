import React, { Component } from "react";
import FamilyImage from '../../../assets/images/children-group.jpg';
import CharityImage from '../../../assets/images/charity.jpg';
import styles from './description.module.scss';

class Description extends Component{
    render(){
        return(
            <div>
                <div className={styles.headerImage}>
                    <img src={FamilyImage} alt='family photo'></img>
                    <h1>Дитячий будинок "Надія"</h1>
                </div>
                <div className={styles.descriptionBlock}>
                    <div>
                        <h2>Про організацію</h2>
                        <p>
                        Дитячий будинок "Надія" в місті Львів запрошує сім'ї з дітьми і без дітей 
                        відвідати наш заклад. Наші чудові малюки дуже хочуть жити в родині з мамою і татом, 
                        щоб у них були братик або сестричка. Зателефонуйте нам по телефону (0322) 35-4540, 
                        узгодьте дату свого можливого появи у нас. Також ми можемо проконсультувати по документам, 
                        які можуть знадобитися і іншим нюансам. Телефонуйте, приходьте, ми вас дуже чекаємо!
                        </p>
                    </div>
                </div>
                <div className={styles.charityBlock}>
                        <div className={styles.charityDescription}>
                            <div>
                                <h2>
                                    Для чого була створена ця сторінка?
                                </h2>
                                <p>
                                    За допомогою цього вебсайту волонтери і всі бажаючі допомогти можуть 
                                    надіслати дітям із дитячих будинків подарунки на 
                                    Новий Рік, Святого Миколая та інші свята. 
                                    Порадувати малюків може кожен бажаючий. 
                                    Якщо в тебе є бажання і можливість допомогти, тоді 
                                    тобі треба лише обрати дитину, для якої збираєшся надіслати подарунок, 
                                    подивитись у список її побажань і відправити за вказаною адресою.
                            </p>
                            </div>
                        </div>
                    <div className={styles.charityImage}>
                        <img src={CharityImage} alt='charity box'></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Description