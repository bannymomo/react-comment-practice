import React from "react";

export default function AddCommnet(props) {
  return (
    <div className="add-comment">
      <h3>user</h3>
      <input
        onChange={event => props.handleUserInput(event)}
        value={props.userInputValue}
      ></input>
      <h3>comment</h3>
      <textarea
        onChange={event => props.handleContentInput(event)}
        rows="10"
        className="comment-typing"
        value={props.contentInputValue}
      ></textarea>
      <button onClick={props.handleAdd}>Submit</button>
    </div>
  );
}
