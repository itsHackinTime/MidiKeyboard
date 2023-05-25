import React from "react";
import logo from "../images/acorn.png"
import will from "../images/image.png"
const NavBar = (props) => (
  <div id="navbar">
    <div id="logo-card">
      <img className="logo" src={logo}></img>
      <h1> BandCorn </h1>
    </div>
    <div id="search-card">
      <input id="search"></input>
      <button id="submit">search</button>
    </div>
    <div id="pf-card">
    <img className="pfp" src={will}></img>
    <p>Will Sentance</p>
    </div>
  </div>
)
export default NavBar