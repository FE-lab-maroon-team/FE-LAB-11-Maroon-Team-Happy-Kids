import React from 'react'
import './button.css';

export const Button = (props) =>{
    return(
        <button value="submit" className="button" onClick="">{props.text}</button>
    )
}