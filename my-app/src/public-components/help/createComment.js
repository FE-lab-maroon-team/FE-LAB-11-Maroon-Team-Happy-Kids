import React, { Component, useEffect } from 'react';
import { Form, Input, Button, Tooltip, Divider } from 'antd';
import { Comment, Avatar, List } from 'antd';
import { createComment } from '../../actions/commentsAction';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchComments } from "../../actions";
import { getComments, getCommentsPending, getCommentsError } from "../../reducers/commentsReducer";


import 'antd/dist/antd.css';



function CommentsListComponent(props) {
  useEffect(() => {
    props.fetchComments();
  }, []);
  const {comments} = props;
  
  function getDateZ(date) {
    const timePast = moment(date).fromNow();
    return timePast;
  }

  return (
    <div>
      {`${comments.length} ${comments.length > 1 ? 'коментарі(в)' : 'коментар'}`}
      {comments.map(comment => (

        <Comment
          key={comment.id}
          author={<a>Невідомий Користувач</a>}
          avatar={
            <Avatar
              src={`https://api.adorable.io/avatars/40/${comment.id}.png`}
              alt={comment.avatar}
            />
          }
          content={
            <p style={{ color: "#0C9DC9", paddingTop: "10px"}} >
              {comment.value}
            </p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>Created: </span>
              <br></br>
              <span>{getDateZ(comment.createdAt)}</span>
            </Tooltip>
          }
        />
      ))}
    </div>
  )
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
  pending: getCommentsPending(state),
  error: getCommentsError(state)
})

const mapsDispatchToProps = {fetchComments};
const Comments = connect(mapStateToProps, mapsDispatchToProps)(CommentsListComponent);


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
      <Button htmlType="submit"
        loading={submitting} 
        onClick={onSubmit} 
        type="primary" 
        style={{backgroundColor: "#4E7C9C", border: "none"}}>
          Додайте коментар
      </Button>
    </Form.Item>
  </div>
);

export class CreateComment extends Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

    handleSubmit = (e) => {
        if (!this.state.value) {
        return;
      }

      this.setState({
        submitting: true,
      });

      this.props.createComment(this.state);

      setTimeout(() => {
        this.setState({
          submitting: false,
          value: '',
          comments: [
            {
              author: 'Невідомий Користувач',
              avatar: `https://api.adorable.io/avatars/40/${this.setState.value}.png`,
              content: <p style={{ color: "#0C9DC9"}} >{this.state.value}</p>,
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
        <Comment 
            avatar={
              <Avatar
                src={`https://api.adorable.io/avatars/40/${comments.id}.png`}
                alt="Some User"
              />
            }
            content = {
              <Editor
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  submitting={submitting}
                  value={value}
              />
            }
        />
        {comments.length > 0 && <CommentList comments={comments} />}
        Останні коментарі:
        <Divider style={{margin: "10px 0"}}/>
        <Comments />
      </div>
    );
  };
};

const mapDispatchToProps = {createComment};

export default connect(null, mapDispatchToProps)(CreateComment)