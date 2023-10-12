import React, { useState } from "react";
import "./Funmode.css";

const Funmode = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
    if (value === "Go!") {
      fetchMeme(input);
    }
  };

  const fetchMeme = (code) => {
    let url;
    if (code === "112") {
      url = "https://api.imgflip.com/get_memes";
    } else if (code === "172") {
      url = "https://v2.jokeapi.dev/joke/";
    } else if (code === "753") {
      url = `http://www.omdbapi.com/?apikey=[yourkey]&t=${input}`;
    }

    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (code === "112") {
            setInput(data.data.memes[0].url);
          } else if (code === "172") {
            setInput(data.setup + " " + data.delivery);
          } else if (code === "753") {
            setInput(data.Title + " - " + data.Plot);
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  const handleGoButton = (value) => {
    setInput(input + value);
    if (value === "Go") {
      fetchMeme(input);
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
          <button onClick={() => handleClick("Go!")} className="btn red span-2">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default Funmode;
