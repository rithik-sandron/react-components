import React from "react";
import "./Navbar.css";

export default function Navbar({ clickEvent }) {
  return (
    <nav>
      <ul className="nav-bar" onClick={(e) => clickEvent(e)}>
        <li className="nav-bar-item">body</li>
        <li className="nav-bar-item">grid-netflix-style-auto-scroll</li>
        <li className="nav-bar-item">grid-pinterest-style</li>
        <li className="nav-bar-item">react-component-lifecycle</li>
        <li className="nav-bar-item">cut-copy-paste-dashboard</li>
      </ul>
    </nav>
  );
}
