import React, { Component } from 'react';
import { Col, Row, AutoComplete, Drawer, Form, Input, Popover, Button, Icon } from 'antd';

import styles from "./help.module.scss";


const content = (
  <div>
    <p style={{color: "#4E7C9C"}}>Напишіть нам!</p>
  </div>
);

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export class DrawerForm extends Component {
  state = { visible: false,
            dataSource: [],
        };

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleChange = (value) => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
  };

  handleSubmitMessage = e => {
    this.setState({
      visible: false,
    });
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        window.open(`mailto:happy_kids@gmail.com?subject=message from 
                    ${values.name}&body=${values.description}`);
      }
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { getFieldDecorator, getFieldError, getFieldsError, isFieldTouched } = this.props.form;

    const usernameError = isFieldTouched('name') && getFieldError('name');
    const emailError = isFieldTouched('Email') && getFieldError('Email');
    const descriptionError = isFieldTouched('description') && getFieldError('description');
    
    return (
      <div className={styles.drawerFormApp}>
        <div className={styles.drawerButtonPosition}>
          <Popover content={content}>
            <Button className={styles.drawerButton} 
            type="primary" onClick={this.showDrawer} 
              style={{backgroundColor: "#4E7C9C", border: "none"}}>
              <Icon type="message" /> Напишіть нам!
            </Button>
          </Popover>
        </div>
        
        <Drawer
          title="Надсилання повідомлення"
          width={'30%'}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form layout="vertical" hideRequiredMark
              onSubmit={this.handleSubmitMessage}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Ім'я Користувача"
                    validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: `Будь-ласка, введіть ім'я користувача!` }],
                  })(<Input style={{ width: 200 }} placeholder="Будь-ласка, введіть ім'я користувача!" />)}
                </Form.Item>
              </Col>
              </Row>

              <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Email"
                    validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
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
                <Form.Item label="Повідомлення"
                    validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: true,
                        message: 'Ваше повідомлення',
                      },
                    ],
                  })(<Input.TextArea rows={4} 
                      placeholder="Будь-ласка, введіть Ваше повідомлення!" 
                      />)}
                </Form.Item>
              </Col>
            </Row>

              <Form.Item>
                <Button type="primary" 
                        htmlType="submit" 
                        disabled={hasErrors(getFieldsError())}
                        style={{backgroundColor: "#4E7C9C", border: "none"}}
                >
                  Надіслати
                </Button>
              </Form.Item>
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
          </div>
        </Drawer>
      </div>
    );
  }
}
  
