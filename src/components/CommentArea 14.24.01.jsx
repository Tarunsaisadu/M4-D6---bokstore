import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComments from "./AddComments";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  // state = {
  //   comments: [],
  // };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjk1NjJkNTI2MjAwMTViNmRjOWMiLCJpYXQiOjE2MzAzMzE4OTcsImV4cCI6MTYzMTU0MTQ5N30.g_hsR-rICzdwt3EK3v_6AeEc3hz7XX5yrlleZm8VndQ",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();

          setComments(comments);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [asin]);

  return (
    <div>
      <AddComments asin={asin} />
      <CommentList commentsToSee={comments} />
    </div>
  );
};
export default CommentArea;
