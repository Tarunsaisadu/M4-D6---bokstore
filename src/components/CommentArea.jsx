import { Component } from "react";
import CommentList from "./CommentList";
import AddComments from "./AddComments";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1NjJkNTI2MjAwMTViNmRjOWMiLCJpYXQiOjE2MzAzMzE4OTcsImV4cCI6MTYzMTU0MTQ5N30.g_hsR-rICzdwt3EK3v_6AeEc3hz7XX5yrlleZm8VndQ",
          },
        }
      );
      console.log(response);

      let comments = await response.json();
      console.log(comments);
      this.setState({ comments: comments });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchComments();
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(hiii);
    if (previousProps.comments !== this.props.comments) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <div>
        <AddComments asin={this.props.asin} />
        <CommentList commentsToSee={this.state.comments} />
      </div>
    );
  }
}
export default CommentArea;
