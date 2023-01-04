import { Component } from "react";

import LastPlayedItem from "./LastPlayedItem";
import "./LastPlayed.scss";

class LastPlayed extends Component {
  state = {};
  render() {
    return (
      <div className="last-played">
        <h2>last played</h2>
        <div className="last-played-items-container">
          <LastPlayedItem
            title="Hogwarts Legacy 50%"
            img="imgs/game/last-played/potter.png"
          />
          <LastPlayedItem
            title="God Of War: Ragnarök 72.5%"
            img="imgs/game/last-played/gow.png"
          />
          <LastPlayedItem
            title="Crash Bandicoot N. Sane Trilogy 34%"
            img="imgs/game/last-played/crash.png"
          />
          <LastPlayedItem
            title="Dying Light 2 Stay Human 100%"
            img="imgs/game/last-played/dying-light2.png"
          />
        </div>
      </div>
    );
  }
}

export default LastPlayed;
