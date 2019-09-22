import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddComment } from "../../actions/post";

const CommentForm = ({ postId, AddComment }) => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <div className="comment-form">
      <div className="bg-primary p">
        <h3>Leave a comment</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault();
          AddComment({ text }, postId);
          setText("");
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Add a comment"
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  AddComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { AddComment }
)(CommentForm);
