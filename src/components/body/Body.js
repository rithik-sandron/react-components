import React, { useState } from "react";
import "./Body.css";
import Grid from "../grid-netflix-style-auto-scroll/Grid";
import PGrid from "../grid-pinterest-style/PGrid";
import Navbar from "../nav-bar/Navbar";
import Lifecycle from "../react-component-lifecycle/Lifecycle";
import CutCopyPaste from "../cut-copy-paste-dashboard/CutCopyDash" 
export default function Body(props) {
  const [theme, setTheme] = useState(false);
  const [component, setComponent] = useState("body");

  const body = (
    <div className="flex-container">
      <span id="face" className="flex-item">
        o_o
      </span>
      <span onClick={switchTheme} className="flex-item">
        {!theme ? 'Light' : 'Dark'}
      </span>
    </div>
  );

  const [element, setElement] = useState(body);

  function switchTheme() {
    if (!theme) {
      document.documentElement.setAttribute("data-theme", "dark");
      document.querySelector("#face").innerHTML = "-_-";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      document.querySelector("#face").innerHTML = "o_o";
    }
    setTheme((theme) => !theme);
  }

  const clickEvent = (e) => {
    e.preventDefault();
    setComponent(e.target.innerHTML);
    switch (e.target.innerHTML) {
      case "body":
        setElement(body);
        break;
      case "grid-netflix-style-auto-scroll":
        setElement(<Grid cards={Array.from(Array(50).keys())} />);
        break;
      case "grid-pinterest-style":
        setElement(<PGrid />);
        break;
      case "react-component-lifecycle":
        setElement(<Lifecycle name="name" />);
        break;
        case "cut-copy-paste-dashboard":
          setElement(<CutCopyPaste name="name" />);
          break;
        
      default:
        return;
    }
  };

  return (
    <div id="common-body">
      <Navbar clickEvent={clickEvent} />
      {component === 'body' ? body : element}
    </div>
  );
}
