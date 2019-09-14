import React from 'react';
import './aboutPrf.scss';

export class AboutMeComponent extends React.Component{
     
      render(){
         return(<div className="container_aboutMe">
             <h1 className="aboutMe_title">Про мене</h1>
             <div className="aboutMe_photo">
               <img src="" alt="children_photo"/>
             </div>
             <div className="aboutMe_description">
                <ul className="aboutMe_items">
                   <li><span>Ім'я</span></li>
                   <li><span>Прізвище</span></li>
                   <li><span>Вік</span></li>
                   <li><span>Про мене:</span></li>
                </ul>
             </div>
         </div>
         )
      }

}