import { Component } from "react";
import Icon from "./Icon";

import "./IconsBar.scss";

class IconsBar extends Component {
  state = {};
  render() {
    return (
      <section className="icons">
        <Icon src="imgs/game/logo.svg" />
        <div className="icons__center">
          <Icon src="imgs/game/heart.svg" />
          <Icon src="imgs/game/settings.svg" />
          <Icon src="imgs/game/puzzle.svg" />
        </div>
        <div className="toggle_theme">
          <Icon src="imgs/game/moon.svg" />
        </div>
      </section>
    );
  }
}

export default IconsBar;
