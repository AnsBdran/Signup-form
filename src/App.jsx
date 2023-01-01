import "./App.scss";
import Game from "./pages/Game";
import LoggedIn from "./pages/LoggedIn";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="app">
      {/* <LoggedIn />
      <Signup /> */}
      <Game />
    </div>
  );
}

export default App;
