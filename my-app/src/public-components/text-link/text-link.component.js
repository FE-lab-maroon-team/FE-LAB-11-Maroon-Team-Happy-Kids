import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Events } from '../../pages/events';
import { Homepage } from '../../pages/homepage';
import { Pdp } from '../../pages/pdp';

import classes from './text-link.module.scss';

export function Textlink (props) {

  return (  
    <div>
      <span>
        <Link to='/homepage'>Домашня</Link>
          <br></br>
        <Link to='/events'>Події</Link>
      </span>        
    </div>  
  )
}
