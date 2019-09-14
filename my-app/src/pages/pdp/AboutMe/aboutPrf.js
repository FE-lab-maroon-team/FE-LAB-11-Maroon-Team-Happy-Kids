import React from 'react';
import './aboutPrf.scss';

export class AboutMeComponent extends React.Component{
     
      render(){
         return(
         <div className="container_aboutMe">
                    <h2 className="aboutMe_title">Про мене</h2>
             <div className="aboutMe_container">
             <div className="aboutMe_photo">
               <img src="" alt="children_photo"/>
             </div>
             <div className="aboutMe_description">
                <ul className="aboutMe_items">
                   <li><span className="items_name">Ім'я:</span></li>
                   <li><span className="items_surname">Прізвище: </span></li>
                   <li><span className="items_age">Вік: </span></li>
                   <li><span className="items_description">Про мене: </span></li>
                </ul>
             </div>
             </div>
         </div>
         )
      }

}