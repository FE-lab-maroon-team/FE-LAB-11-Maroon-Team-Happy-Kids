import React from 'react';
import PropTypes from 'prop-types';

import classes from './events.module.scss';

export const Events = (props) => {
  return(
  <div>
      Hello from Events
  </div>
  )
}

Events.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Events
