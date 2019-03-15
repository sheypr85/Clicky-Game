import React from "react";


function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Clicky-Click
      </a>
      <ul className="nav justify-content-center">
  <li className="nav-item">
    <div> Score: {props.score}</div>
  </li>
  
</ul>

    </nav>
  );
}

export default Nav;
