import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Events } from './pages/events';
import { Homepage } from './pages/homepage';
import { Pdp } from './pages/pdp';
import { Footer } from './public-components/footer';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import { MainPage } from './pages';





function AppRouter(){

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/events'>Events</Link>
                        </li>
                        <li>
                            <Link to='/pdp'>Home</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/:id" component={Child}/>

                <Route path="/" exact component ={Homepage}/>
                <Route path="/events/" exact component ={Events}/>
                <Route path="/pdp/" exact component ={Pdp}/>

                <Route path="/order/:direction(asc|desc)"
                    component={ComponentWithRegex}/>
            </div>
            <Footer></Footer>
        </Router>
         
    )
}

function Child({ match }) {
    return (
      <div>
        <h3>{match.params.id}</h3>
      </div>
    );
}


function ComponentWithRegex({ match }) {
    return (
      <div>
        <h3>Only asc/desc are allowed: {match.params.direction}</h3>
      </div>
    );
  }


ReactDOM.render(<AppRouter />,document.querySelector('#root')
)

