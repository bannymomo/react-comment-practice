import React from "react";

export default function AddCommnet(props) {
  return (
    <div className="add-comment">
      <h3>用户名</h3>
      <input
        onChange={event => props.handleUserInput(event)}
        value={props.userInputValue}
      ></input>
      <h3>评论内容</h3>
      <textarea
        onChange={event => props.handleContentInput(event)}
        rows="10"
        className="comment-typing"
        value={props.contentInputValue}
      ></textarea>
      <button onClick={props.handleAdd}>提交</button>
    </div>
  );
}
