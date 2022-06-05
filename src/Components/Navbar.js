import React from "react";
import { FaReact } from "react-icons/fa";
function Navbar(props) {
  return (
    <div>
      <nav className={props.dark ? "nav" : "nav-dark"}>
        <FaReact className="Icon-color" />
        <h1>ReactFacts</h1>
        <div className={props.dark ? "toggle" : "toggle-dark"}>
          <h3>Light</h3>
          <div
            className={props.dark ? "toggle-btn" : "toggle-btn-dark"}
            onClick={props.handleClick}
          ></div>
          <h3>dark</h3>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
