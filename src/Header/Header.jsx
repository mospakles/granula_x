import React from "react";
import "./Header.css";

const Header = ({ mode, toggleMode }) => {
  return (
    <header className="header">
      <h1>Calculator</h1>
      <div className="mode-toggle">
        <span>{mode === "serious" ? "Serious Mode" : "Fun Mode"}</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={mode === "fun"}
            onChange={toggleMode}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
