
import React, { Component } from 'react';
import { Icon } from 'antd';
import classnames from "classnames";

import { Textlink } from '../text-link'
import className from './footer.css';


export class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
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
        <div className="footer_logo_social">
          <div className="footer_logo">
          <div>
            {new Date().getFullYear()} &#9400;: 
            <Textlink className="footer_logo_text" name=' nadiya.com' path='https://www.nadiya.com' />
          </div>
            <div className="footer_logo_img"> </div>
          </div>

          <div className="footer_social">
              <p>Social</p>
            <ul>
              <li><Icon type="facebook" style={{ fontSize: '30px' }}/></li>
              <li><Icon type="instagram" style={{ fontSize: '30px' }}/></li>
              <li><Icon type="twitter" style={{ fontSize: '30px' }}/></li>
              <li><Icon type="skype" style={{ fontSize: '30px' }}/></li>
            </ul>
          </div>
        </div>

        <div class="or-spacer-vertical left">
          <div class="mask"></div>
        </div>
        <div className="footer_text_about">
          <a>
          Lorem Ipsum - це текст-"риба", 
          що використовується в друкарстві та 
          дизайні. Lorem Ipsum є, фактично, стандартною 
          "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову 
         гранку та склав на ній підбірку зразків шрифтів. 
          "Риба" не тільки успішно пережила п'ять століть, 
          але й прижилася в електронному верстуванні, 
          залишаючись по суті незмінною.
          </a>
        </div>

        <div class="or-spacer-vertical right">
          <div class="mask"></div>
        </div>
      

      <div className="footer_contacts_links">
        <ul className="footer_contacts">
          <li><Icon className="footer_contacts_icons" type="phone" style={{ fontSize: '30px', color: '#DA3E44' }} theme="outlined" />
            <Textlink name='+38(097)1234567' path='' /></li>
          <li><Icon className="footer_contacts_icons" type="mail" style={{ fontSize: '30px', color: '#DA3E44' }} theme="outlined" />
          <Textlink name='nadiya.com' path='' /></li>
          <li><Icon className="footer_contacts_icons" type="home" style={{ fontSize: '30px', color: '#DA3E44' }} theme="outlined" />
          <Textlink name='м.Львів, вул.Центральна,1' path='' /></li>
        </ul>

        <ul className="footer_links">
          <li><Textlink name='Домашня' path='../../pages/homepage' /></li>
          <li><Textlink name='Події' path='../../pages/events' /></li>
          <li><Textlink name='Деталі' path='../../pages/profile' /></li>
        </ul>
      </div>
    </div>
  )
}
}