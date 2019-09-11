import React from 'react'
import './button.css';

export const Button = ({text,handler}) =>{

    return(
        <button  className="button" onClick={handler}>{text}</button>
    )
}
