import React from "react";
import CommentItem from "./CommentItem";

export default function CommentList(props) {
  return (
    <div className="comment-list">
      <h3>评论回复</h3>
      {props.comments.map((comment, index) => {
        return (
          <CommentItem
            handleDelete={() => props.handleDelete(index)}
            comment={comment}
            key={index + comment.person}
          />
        );
      })}
    </div>
  );
}
