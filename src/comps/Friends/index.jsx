import { Component } from "react";
class Friends extends Component {
  state = {};
  render() {
    return (
      <div className="friends">
        {/* <h2>Friends</h2> */}
        <img
          src="imgs/game/FRIENDS.png"
          alt="friends"
          style={{ maxWidth: "15rem", maxHeight: "100%" }}
        />
      </div>
    );
  }
}
export default Friends;
