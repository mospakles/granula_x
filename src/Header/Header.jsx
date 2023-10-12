import React from "react";
import "./Header.css";

const Header = ({ mode, toggleMode }) => {
  return (
    <div>
      <header className="header">
        <h1>Granula X Calc</h1>
        <label className="toggle">
          <input type="checkbox" onClick={toggleMode} />
          <span className="slider"></span>
        </label>
      </header>
    </div>
  );
};

export default Header;
