import "./App.scss";
import Logged from "./pages/Logged";
import React from "react";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [submit, setSubmit] = useState(false);

  const handleDirect = () => {
    setSubmit((prev) => !prev);
  };

  return (
    <div className="app">
      {submit && <Logged />}
      {!submit && <Signup handleDirect={handleDirect} />}
    </div>
  );
}

export default App;
