import React, { Component } from "react";

class Icon extends Component {
  render() {
    return <img src={this.props.src} className="icons-bar__icon" />;
  }
}

export default Icon;
