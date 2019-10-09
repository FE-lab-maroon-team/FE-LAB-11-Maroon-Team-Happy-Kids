import React from 'react';
import { Link } from 'react-router-dom';
import './text-link.css';



export const Textlink = (props) => {

  return (  
    <span className="text_link">
        <Link to={props.path}>{props.name}</Link>
    </span>        
  )
}

