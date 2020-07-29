import React from "react";
import { removePost } from "../redux/actions";
import { connect } from "react-redux";

const Post = ({ id, title, body, removePost }) => {
  return (
    <li>
      <h1>{title}</h1>
      <p>{body}</p>
      <button
        className="form-close-button"
        onClick={() => removePost(id)}
      ></button>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  removePost: postId => dispatch(removePost(postId))
});

export default connect(
  null,
  mapDispatchToProps
)(Post);
