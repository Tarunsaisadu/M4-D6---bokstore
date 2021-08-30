import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            {/* <Col md={{ span: 12, offset: -2 }}> */}
            <Card
              onClick={() => this.setState({ selected: !this.state.selected })}
              style={{
                backgroundColor: this.state.selected ? "blue" : "none",
                display: "inline-block",
                width: "250px",
                height: "250px",
                padding: "30px",
              }}
            >
              <Card.Img variant="top" src={this.props.book.img} />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>
                  {this.props.book.title}
                </Card.Title>
              </Card.Body>
            </Card>
            {/* </Col> */}
            <Col xs={6}>
              {this.state.selected && (
                <CommentArea asin={this.props.book.asin} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SingleBook;
