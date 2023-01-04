import { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div className="movie">
        <img
          src={this.props.cover}
          alt="movie cover"
          className="movie__cover"
        />
        {/* <img src={this.props.character} alt="character" className="character" />
        <img src={this.props.logo} alt="logo" className="logo" /> */}
      </div>
    );
  }
}

export default MovieCard;
