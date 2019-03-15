import React from "react";
import "./style.css";


function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
      <a className="navbar-brand" href="/">
        Clicky-Click
      </a>
      <ul className="nav">
      <li className="nav-item">
        <div className="score"> Score: {props.score}</div>
      </li>
      
      <li className="nav-item">
      <div className="topscore"> Top Score: {props.topScore}</div>
      </li>
    </ul>

    </nav>
  );
}

export default Nav;
