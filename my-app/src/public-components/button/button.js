import React from 'react'
import './button.css';

export const Button = (props) =>{
     function handleClick(props) {
        console.log('The link was clicked.');
      }
    return(
        <button  className="button" onClick={handleClick}>{props.text}</button>
    )
}
