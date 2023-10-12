import React, { useState } from "react";
import axios from "axios";
import "./Funmode.css";

const Funmode = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const contents = {
    112: {
      type: "Meme",
      title: "Funny Meme",
      content: "Funny Meme Isn't it?",
    },
    172: {
      type: "Joke",
      title: "Hilarious Joke",
      content: "What were you really expecting?",
    },
    753: {
      type: "Movie",
      title: "Interesting Movie",
      content: "Tell me a movie you love so much",
    },
  };

  const handleClick = (value) => {
    if (["1", "2", "3", "5", "7"].includes(value)) {
      setInput(input + value);
    }
    if (value === "Go!") {
      setLoading(true);
      fetchMeme(input);
    }
  };

  const fetchMeme = (code) => {
    setLoading(true);

    const content = contents[code];
    if (content && content.content) {
      setLoading(false);
      setInput(content.content);
    } else {
      setLoading(false);
      setInput("Invalid code or no content available.");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} readOnly className="calc-numbers" />
        <div className="calculator-buttons">
          <button className="btn" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleClick("8")} disabled>
            8
          </button>
          <button className="btn" onClick={() => handleClick("9")} disabled>
            9
          </button>
          <button className="btn blue" onClick={clearInput}>
            Del
          </button>
          <button className="btn" onClick={() => handleClick("4")} disabled>
            4
          </button>
          <button className="btn" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleClick("6")} disabled>
            6
          </button>
          <button
            className="btn orange operator"
            onClick={() => handleClick("+")}
            disabled
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
          <button className="btn" onClick={() => handleClick("-")} disabled>
            -
          </button>
          <button className="btn" onClick={() => handleClick(".")} disabled>
            .
          </button>
          <button className="btn" onClick={() => handleClick("0")} disabled>
            0
          </button>
          <button className="btn" onClick={() => handleClick("/")} disabled>
            /
          </button>
          <button className="btn" onClick={() => handleClick("*")} disabled>
            x
          </button>
          <button className="btn blue span-2" onClick={clearInput}>
            RESET
          </button>
          <button
            onClick={() => handleClick("Go!")}
            className={`btn red span-2 ${loading ? "loading" : ""}`}
          >
            {loading ? "Loading..." : "Go"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Funmode;
