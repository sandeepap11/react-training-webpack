import React, { Component } from "react";
import { addPost } from "../redux/actions";
import { connect } from "react-redux";

class AddPost extends Component {
  constructor() {
    super();

    this.state = {
      openPostForm: false,
      postForm: {
        title: "",
        body: ""
      }
    };
  }

  onTextChange = (type, value) =>
    this.setState({ postForm: { ...this.state.postForm, [type]: value } });

  onSubmit = () => {
    this.props.addPost(
      {
        ...this.state.postForm,
        userId: 1
      },
      () => {
        this.setState({
          postForm: {
            title: "",
            body: ""
          },
          openPostForm: false
        });
      }
    );
  };
  render() {
    const { openPostForm, postForm } = this.state;

    return (
      <div>
        <button
          className="create-post"
          onClick={() => this.setState({ openPostForm: true })}
        >
          +
        </button>
        {openPostForm && (
          <div className="post-form">
            <button
              className="form-close-button"
              onClick={() => this.setState({ openPostForm: false })}
            ></button>
            <h1>New Post</h1>
            <input
              type="text"
              placeholder="Title"
              value={postForm.title}
              onChange={event => this.onTextChange("title", event.target.value)}
            />
            <textarea
              placeholder="Body"
              onChange={event => this.onTextChange("body", event.target.value)}
              value={postForm.body}
            ></textarea>

            <button className="form-submit-button" onClick={this.onSubmit}>
              Post
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: (post, successCallBack) => dispatch(addPost(post, successCallBack))
});

export default connect(
  null,
  mapDispatchToProps
)(AddPost);
