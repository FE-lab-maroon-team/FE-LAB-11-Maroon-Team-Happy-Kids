import React, { Component } from 'react';
import { Drawer, Form, Icon } from 'antd';
import { Textlink } from '../text-link';
import { DrawerForm } from './drawerForm.js';
import  CreateComment  from './createComment';

import 'antd/dist/antd.css';
import styles from "./help.module.scss";



const DrawerFormApp = Form.create()(DrawerForm);


       
export class Help extends Component {
    state = { visible: false };
  
    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <div>
          <div className={styles.help_link}>
            <Icon type="message" theme="filled" style={{ fontSize: '30px', paddingRight: '5px' }} />
            <Textlink name='Зворотній звязок' path='#' onClick={this.showDrawer} />
          </div>
          
          <Drawer
            title="Запитання та коментарі"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div>
                <CreateComment />
            </div>

            <div className={styles.drawerForm}>
                <DrawerFormApp />
            </div>
          </Drawer>
        </div>
      );
    }
  }
  