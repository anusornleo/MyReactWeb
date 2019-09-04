import React from "react";
import { Button } from "react-bootstrap";

class AddNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
        counter: prevState.counter + 1
      }))
      
  }

  render() {
    return (
      <React.Fragment>
        <h1>Ahoy! React</h1>
        <p>{this.props.message}</p>
        <Button variant="secondary" onClick={this.handleClick}>Click me!</Button>
        <p>Total click : {this.state.counter}</p>
      </React.Fragment>
    );
  }
}

export default AddNumber;