import React from "react";
import logo from "../images/acorn.png"
import will from "../images/image.png"

    
const obj = {
  text: ''
};



const handleChange = event => {
  obj.text = event.target.value;
}
const NavBar = (props) => {

  const getArtist = async (input) => {
    obj.text = encodeURI(obj.text);
    const response = await fetch('search',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj)
    })
      .then(res => {
      return res.json()
    })
    .then((data) => {
    console.log(data)
    });
   
   
  }
  return (
  <div id="navbar">
    <div id="logo-card">
      <img className="logo" src={logo}></img>
      <h1> BandCorn </h1>
    </div>
    <div id="search-card">
      <input id="search"onChange={handleChange}></input>
      <button id="submit" onClick={getArtist}>search</button>
    </div>
    <div id="pf-card">
    <img className="pfp" src={will}></img>
    <p>Will Sentance</p>
    </div>
   </div>
 )
  }
 export default NavBar