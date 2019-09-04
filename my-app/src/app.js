import React, {Component} from 'react';
import {Homepage} from './homepage';
import {Events} from './events';
import {Pdp} from './pdp';

function App() {
    return (
      <div className="Container">
          < Homepage />
          < Events />
          < Pdp />
      </div>
    );
  }
  
export default App;
