import { Component } from "react";
import Icon from "./Icon";

import "./IconsBar.scss";

class IconsBar extends Component {
  state = {};
  render() {
    return (
      <section className="icons-bar">
        <div className="icons-bar__logo">
          <Icon src="imgs/game/light-theme-icons/game-logo.svg" />
        </div>
        <div className="icons-bar__center">
          <Icon src="imgs/game/light-theme-icons/like.svg" />
          <Icon src="imgs/game/light-theme-icons/settings.svg" />
          <Icon src="imgs/game/light-theme-icons/puzzle.svg" />
        </div>
        <div className="icons-bar__toggle-theme">
          <Icon src="imgs/game/light-theme-icons/moon.svg" />
          <Icon src="imgs/game/light-theme-icons/sun.svg" />
        </div>
      </section>
    );
  }
}

export default IconsBar;
