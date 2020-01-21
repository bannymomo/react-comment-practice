import React from "react";

export default function CommentItem(props) {
  const handleClick = () => {
    alert(`删除${props.comment.person}的评论`);
    props.handleDelete();
  };

  return (
    <div className="comment-item">
      <span>{props.comment.person}说：</span>
      <p className="comment-content">{props.comment.commentContent}</p>
      <button onClick={handleClick} className="delete-button">
        删除
      </button>
    </div>
  );
}
