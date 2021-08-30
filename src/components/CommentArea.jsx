import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
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

  render() {
    return (
      <div>
        <CommentList commentsToSee={this.state.comments} />
      </div>
    );
  }
}
export default CommentArea;
