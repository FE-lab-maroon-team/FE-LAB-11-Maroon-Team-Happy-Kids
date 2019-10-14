import React, { Component } from 'react';
import { Drawer, Form, Input, Button, Icon } from 'antd';
import { Col, Row, AutoComplete } from 'antd';
import { Comment, Avatar, List } from 'antd';
import moment from 'moment';
import { Textlink } from '../text-link';

import 'antd/dist/antd.css';
import styles from "./help.module.scss";



class DrawerForm extends React.Component {
  state = { visible: false,
            dataSource: []
        };

  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
  };

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
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.drawerFormApp}>
        <Button className={styles.drawerButton} type="primary" onClick={this.showDrawer}>
        <Icon type="message" /> Напишіть нам!
        </Button>
        <Drawer
          title="Надсилання повідомлення"
          width={'30%'}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Ім'я Користувача">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: `Будь-ласка, введіть ім'я користувача!` }],
                  })(<Input style={{ width: 200 }} placeholder="Будь-ласка, введіть ім'я користувача!" />)}
                </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Email">
                  {getFieldDecorator('Email', {
                    rules: [{ required: true, message: 'Будь-ласка, введіть Ваш Email!' }],
                  })(
                    <AutoComplete
                        dataSource={this.state.dataSource}
                        style={{ width: 200 }}
                        onChange={this.handleChange}
                        placeholder="Email"
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Повідомлення">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'Ваше повідомлення',
                      },
                    ],
                  })(<Input.TextArea rows={4} placeholder="Будь-ласка, введіть Ваше повідомлення!" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Скасувати
            </Button>
            <Button onClick={this.onClose} type="primary">
              Надіслати
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

const DrawerFormApp = Form.create()(DrawerForm);


const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'коментарі' : 'коментар'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Додайте коментар
      </Button>
    </Form.Item>
  </div>
);

class CommentQuestion extends Component {
  state = {
    comments: [],
    submitting: false,
    value: ''
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Невідомий Користувач',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };


  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    );
  }
}
       
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
                <CommentQuestion />
            </div>

            <div className={styles.drawerForm}>
                <DrawerFormApp />
            </div>
          </Drawer>
        </div>
      );
    }
  }
  