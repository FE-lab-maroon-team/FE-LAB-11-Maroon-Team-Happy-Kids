import React from 'react';
import { Link } from 'react-router-dom';
import classes from './text-link.css';



export const Textlink = (props) => {

  return (  
    <span className="text_link">
        <Link to={props.path}>{props.name}</Link>
    </span>        
  )
}

