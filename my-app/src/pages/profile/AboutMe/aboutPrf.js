import React from 'react';
import './aboutPrf.scss';
import { db } from '../../../firebase-config';

export class AboutMeComponent extends React.Component{

   state = {
      allUsers: []
    }
   
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
     }

     renderUser(users) {
      return users.map(user => {
        const {name, surname, photoUrl,description,birthday} = user;
        console.log(user)

        return(
         <div className="container_aboutMe">
                    <h2 className="aboutMe_title">Про мене</h2>
             <div className="aboutMe_container">
             <div className="aboutMe_photo">
               <img src={photoUrl} alt="children_photo"/>
             </div>
             <div className="aboutMe_description">
                <ul className="aboutMe_items">
                   <li><span className="items_name">Ім'я:  {name}</span></li>
                   <li><span className="items_surname">Прізвище:  {surname}</span></li>
                   <li><span className="items_age">Рік народження:  {birthday}</span></li>
                   <li><span className="items_description">Про мене:  {description}</span></li>
                </ul>
             </div>
             </div>
         </div>
         )
      })
    }

      render(){

         return( 
         <div>{this.renderUser(this.state.allUsers)}</div>
         )
      }

}