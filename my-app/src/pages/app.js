import React, {Component} from 'react';
import Homepage from './homepage/homepage.component';
import Events from './events/events.component';
import Pdp from './pdp/pdp.component';

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
