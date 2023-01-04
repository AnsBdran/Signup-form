import IconsBar from "../../comps/IconsBar";
import MovieCards from "../../comps/MovieCards";
import Header from "../../comps/Header";
import "./Game.scss";
import LastPlayed from "../../comps/LastPlayed";
import MostRecent from "../../comps/MostRecent";
import Friends from "../../comps/Friends";

function Game() {
  return (
    <div className="game-main">
      <div className="game-main__icons">
        <IconsBar />
      </div>
      <header className="game-main__header">
        <Header />
      </header>
      <main className="game-main__main">
        <section className="movie-cards-wrapper">
          <MovieCards />
        </section>
        <section className="last-played-wrapper">
          <LastPlayed />
        </section>
        <section className="most-recent-wrapper">
          <MostRecent />
        </section>
        <section className="firends-wrapper">
          <Friends />
        </section>
      </main>
    </div>
  );
}

export default Game;
