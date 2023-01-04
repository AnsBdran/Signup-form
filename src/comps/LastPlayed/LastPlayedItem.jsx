import { Component } from "react";
class LastPlayedItem extends Component {
  state = {};
  render() {
    return (
      <div className="last-played-item">
        <img
          src={this.props.img}
          alt={this.props.title}
          className="last-played-item__img"
        />
        <p className="last-played-item__title">{this.props.title}</p>
      </div>
    );
  }
}

export default LastPlayedItem;
