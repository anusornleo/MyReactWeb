import React from "react";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class HelloApp extends React.Component {
  render() {
    return <Welcome name="Sara" />
  }
}

export default HelloApp;
