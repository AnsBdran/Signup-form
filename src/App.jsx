import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Game from "./pages/Game";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/sign-in" element={<LogIn />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
