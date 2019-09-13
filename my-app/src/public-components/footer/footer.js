
import React, { Component } from 'react';
import { Icon } from 'antd';
import classnames from "classnames";

import { Textlink } from '../text-link'
import classes from './footer.css';


export class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the footer.
  handleScroll = () => {
    
    const { prevScrollpos } = this.state;
    console.log(this);
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
  return (
        <div className={classnames("footer", {
          "footer_hidden": this.state.visible })}>
      <div className="footer_logo">
        <div>
          {new Date().getFullYear()} &#9400;: 
          <Textlink className="footer_logo_text" name=' nadiya.com' path='https://www.nadiya.com' />
        </div>
        <div className="footer_logo_img"> </div>
      </div>

      <div className="footer_contacts_links">
        <ul className="footer_contacts">
          <li><Icon className="footer_contacts_icons" type="phone" style={{ fontSize: '30px', color: '#DA3E44' }} theme="outlined" />
            <Textlink name='Phone' path='#' /></li>
          <li><Icon className="footer_contacts_icons" type="mail" style={{ fontSize: '30px', color: '#DA3E44' }} theme="outlined" />
          <Textlink name='Mail' path='#' /></li>
          <li><Icon className="footer_contacts_icons" type="home" style={{ fontSize: '30px', color: '#DA3E44' }} theme="outlined" />
          <Textlink name='Adress' path='#' /></li>
        </ul>

        <ul className="footer_links">
          <li><Textlink name='Home' path='../../pages/homepage' /></li>
          <li><Textlink name='Events' path='../../pages/events' /></li>
          <li><Textlink name='Pdp' path='../../pages/pdp' /></li>
        </ul>
      </div>
 
    </div>
  )
}
}