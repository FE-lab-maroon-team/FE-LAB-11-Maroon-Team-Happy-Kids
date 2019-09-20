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
    
    const currentScrollPos = window.pageYOffset;
    const scrollInBottom = document.documentElement.scrollTop === document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const visible = !scrollInBottom;
 
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
   
  };

  render() {
  return (
    <div className="footer_main">
    <div className={classnames("footer", {
      "footer_hidden": this.state.visible })}>
        <div className="footer_logo_social">
          <div className="footer_logo">
          <div className="footer_logo_text">
            {new Date().getFullYear()} &#9400;: 
            <a href={'https://www.nadiya.com/'}> www.nadiya.com </a>
          </div>
            <div className="footer_logo_img"> </div>
          </div>

          <div className="footer_social">
              <p>Ми в соц. мережах</p>
            <ul>
              <li><a href={'https://www.facebook.com'}><Icon type="facebook" style={{ fontSize: '30px' }}/></a></li>
              <li><a href={'https://www.instagram.com/?hl=uk'}><Icon type="instagram" style={{ fontSize: '30px' }}/></a></li>
              <li><a href={'https://twitter.com/?lang=uk'}><Icon type="twitter" style={{ fontSize: '30px' }}/></a></li>
              <li><a href={'https://www.skype.com/uk/'}><Icon type="skype" style={{ fontSize: '30px' }}/></a></li>
            </ul>
          </div>
        </div>

        <div className="or-spacer-vertical left">
          <div className="mask"></div>
        </div>
        <div className="footer_text_about">
          
          Сайт «NADIYA» створено з метою<br/>
          генерації добрих справ і допомагає простягти руку щедрості<br/>
          тим хто найбільше її потребує.
          
        </div>

        <div className="or-spacer-vertical right">
          <div className="mask"></div>
        </div>
      

      <div className="footer_contacts_links">
        <ul className="footer_contacts">
          <li><Icon className="footer_contacts_icons" type="phone" style={{ fontSize: '25px', color: '#DA3E44' }} theme="outlined" />
          <Textlink name='+38(097)1234567' path='' /></li>
          <li><Icon className="footer_contacts_icons" type="mail" style={{ fontSize: '25px', color: '#DA3E44' }} theme="outlined" />
          <Textlink name='nadiya.com' path='' /></li>
          <li><Icon className="footer_contacts_icons" type="home" style={{ fontSize: '25px', color: '#DA3E44' }} theme="outlined" />
          <Textlink name='м.Львів, вул.Центральна,1' path='' /></li>
        </ul>

        <ul className="footer_links">
          <li><Textlink name='Домашня' path='/' /></li>
          <li><Textlink name='Події' path='/events' /></li>
          <li><Textlink name='Профіль' path='/profile' /></li>
        </ul>
      </div>
    </div>
    </div>
  )
}
}