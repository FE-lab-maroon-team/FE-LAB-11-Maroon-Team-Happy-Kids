import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Events } from './pages/events';
import { Homepage } from './pages/homepage';
import { Pdp } from './pages/pdp';
import { Footer } from './public-components/footer';

// import { MainPage } from './pages';





function AppRouter(){
    return (
        <>
        <Router>
            <div className="container">
            <Header />
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/events'>Events</Link>
                        </li>
                        <li>
                            <Link to='/pdp'>Pdp</Link>
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
        </>
    )
}




ReactDOM.render(<AppRouter />,document.querySelector('#root')
)

