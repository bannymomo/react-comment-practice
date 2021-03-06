import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddComment from "./components/AddComment";
import CommentList from "./components/CommentList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        { person: "Mick", commentContent: "React is funny !" },
        { person: "Chen", commentContent: "React is boring... " }
      ],
      userInputValue: "",
      contentInputValue: ""
    };
  }

  handleUserInput = event => {
    this.setState({ userInputValue: event.target.value });
  };

  handleContentInput = event => {
    this.setState({ contentInputValue: event.target.value });
  };

  handleAdd = () => {
    const newPost = {
      person: this.state.userInputValue,
      commentContent: this.state.contentInputValue
    };
    if (!newPost.person) {
      alert("Please fill in your name");
      return;
    }

    if (!newPost.commentContent) {
      alert("Please write some comments");
      return;
    }
    const newComments = [...this.state.comments];
    newComments.push(newPost);
    this.setState({
      comments: newComments,
      userInputValue: "",
      contentInputValue: ""
    });
  };

  handleDelete = index => {
    const newComments = [...this.state.comments];
    newComments.splice(index, 1);
    this.setState({
      comments: newComments
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="flex-container">
          <AddComment
            handleAdd={this.handleAdd}
            handleUserInput={this.handleUserInput}
            handleContentInput={this.handleContentInput}
            userInputValue={this.state.userInputValue}
            contentInputValue={this.state.contentInputValue}
          />
          <CommentList
            comments={this.state.comments}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
