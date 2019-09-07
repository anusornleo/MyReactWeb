import React from "react";
import { Button, Card } from "react-bootstrap";

class MyCard extends React.Component {
  render() {
    return (
      <div class="col-sm-4">
             <Card>
          <Card.Img variant="top" src="http://www.politicalmetaphors.com/wp-content/uploads/2015/04/blog-shapes-square-windows.jpg" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Some quick example tessdsdxt to build on the card title and make up the
              bulk of the card's content0.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
   
    );
  }
}

export default MyCard;
