import React, { useState } from "react";
import "./SeriousMode.css";

const SeriousMode = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput("Error: " + e.message);
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="calc-container">
      <div className="calculator">
        <input type="text" value={input} readOnly className="calc-numbers" />
        <div className="calculator-buttons">
          <button className="btn" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="btn blue" onClick={clearInput}>
            Del
          </button>
          <button className="btn" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleClick("6")}>
            6
          </button>
          <button
            className="btn orange operator"
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button className="btn" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="btn" onClick={() => handleClick("-")}>
            -
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="btn" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleClick("/")}>
            /
          </button>
          <button className="btn" onClick={() => handleClick("*")}>
            x
          </button>
          <button className="btn blue span-2" onClick={clearInput}>
            RESET
          </button>
          <button className="btn red span-2" onClick={calculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeriousMode;
