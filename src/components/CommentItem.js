import React from "react";

export default function CommentItem(props) {
  const handleClick = () => {
    alert(`Delete ${props.comment.person}'s comment`);
    props.handleDelete();
  };

  return (
    <div className="comment-item">
      <span>{props.comment.person}：</span>
      <p className="comment-content">{props.comment.commentContent}</p>
      <button onClick={handleClick} className="delete-button">
        Delete
      </button>
    </div>
  );
}
