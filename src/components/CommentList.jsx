import { ListGroup } from "react-bootstrap";

const CommentList = ({ commentsToSee }) => (
  <ListGroup>
    {commentsToSee.map((comment) => (
      <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
    ))}
  </ListGroup>
);

export default CommentList;
