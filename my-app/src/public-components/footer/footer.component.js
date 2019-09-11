import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Textlink } from '../text-link'
import classes from './footer.module.scss';

export const Footer = () => {
  return (
    <MDBFooter color="#607d8b blue-grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">ПРИТУЛОК "НАДІЯ"</h5>
            <p>
              м. Львів, вул.Нова, 30.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title" color="#795548 brown">Меню</h5>
                <li className="list-unstyled">
                  <Textlink></Textlink>
                </li>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.prytulok.com"> prytulok.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

