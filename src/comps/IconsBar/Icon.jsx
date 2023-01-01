import React, { Component } from "react";

class Icon extends Component {
  state = {};
  render() {
    return <img src={this.props.src} className="icon" />;
  }
}

export default Icon;
