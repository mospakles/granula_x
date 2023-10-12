import React, { useState } from "react";
import "./App.css";
import SeriousMode from "./seriousmode/SeriousMode";
import Header from "./Header/Header";
import Funmode from "./Funmode/Funmode";

function App() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("serious");

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "serious" ? "fun" : "serious"));
    setInput("");
  };

  return (
      <div className="App">
        <Header mode={mode} toggleMode={toggleMode} />
        <div className="page">
          {mode === "serious" ? (
            <SeriousMode />
          ) : (
            <Funmode/>
          )}
        </div>
      </div>
  );
}

export default App;
