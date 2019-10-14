import React from 'react';
import { Link } from 'react-router-dom';
import './text-link.css';



export const Textlink = ({ path, onClick, name }) => {

  return (  
    <span className="text_link">
        <Link to={path} onClick={onClick}>{name}</Link>
    </span>        
  )
}

