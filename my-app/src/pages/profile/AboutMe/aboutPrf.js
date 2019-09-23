import React from 'react';
import './aboutPrf.scss';
import { Spinner } from '../../../public-components/spinner/index';
import { db } from '../../../firebase-config';

export class AboutMeComponent extends React.Component{
   

   state = {
      user: null
    }
   
     componentDidMount() {
      let docRef = db.collection("users").doc(this.props.userId);
      docRef.get()
     .then(doc => {
      if (!doc.exists) {
      console.log('No such document!');
      } else {
          this.setState({
            user:doc.data()
          })
     }
  });
     }
      render(){
        if(!this.state.user){
          return <Spinner />
        }
        const { photoUrl,name,surname,description,birthday} = this.state.user;
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
                   <li><span className="items_surname">Прізвище:  { surname }</span></li>
                   <li><span className="items_age">Рік народження:  { birthday }</span></li>
                   <li><span className="items_description">Про мене:  { description }</span></li>
                </ul>
             </div>
             </div>
         </div>
         )
      }
}