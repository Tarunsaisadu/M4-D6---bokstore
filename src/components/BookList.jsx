import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState(" ");
  const [selectedBook, setSelectedBook] = useState(null);
  // state = {
  //   searchQuery: "",
  // };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        {books
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((b) => (
            // <Col xs={3}>
            <SingleBook
              book={b}
              selectedBook={selectedBook}
              changeSelectedBook={(asin) => setSelectedBook(asin)}
            />
            // {/* </Col> */}
          ))}
      </Row>
      <Row>
        <CommentArea asin={selectedBook} />
      </Row>
    </Container>
  );
};

export default BookList;
