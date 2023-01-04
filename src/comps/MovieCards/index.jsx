import { Component } from "react";

import MovieCard from "./MovieCard";
import "./MovieCards.scss";

class MovieCards extends Component {
  render() {
    return (
      <div className="movies">
        <h2>New Games</h2>
        <div className="movie-cards">
          <MovieCard
            // cover="imgs/game/movies/god-of-war/cover.png"
            cover="imgs/game/movies/gow.png"
            // character="imgs/game/movies/god-of-war/character-small.png"
            // logo="imgs/game/movies/god-of-war/logo-small.png"
          />
          <MovieCard
            cover="imgs/game/movies/superman.png"
            // cover="imgs/game/movies/superman/cover.png"
            // character="imgs/game/movies/superman/character-small.png"
          />
          <MovieCard
            cover="imgs/game/movies/spiderman.png"
            // cover="imgs/game/movies/spiderman/cover.png"
            // character="imgs/game/movies/spiderman/character-small.png"
            // logo="imgs/game/movies/spiderman/logo-small.png"
          />
        </div>
      </div>
    );
  }
}

export default MovieCards;
