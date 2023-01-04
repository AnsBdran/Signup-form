import { Component } from "react";

import "./MostRecent.scss";

class MostRecent extends Component {
  state = {};
  render() {
    return (
      <div className="most-recent">
        <h2>most recent trophy</h2>
        <div className="img-container">
          <img
            src="imgs/game/most-recent/cover.png"
            alt="most recent cover"
            className="cover"
          />
          <div className="upper">
            <h3>
              PERFECT KILL streak
              <br />
              <span className="small">You are in the 0.5%</span>
            </h3>
            <img
              src="imgs/game/most-recent/trophy.png"
              alt="trophy"
              className="trophy"
            />
          </div>
          <div className="lower">
            <h3>assassin's creed odyssey</h3>
            <h4>last played: 34 hours ago</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MostRecent;
