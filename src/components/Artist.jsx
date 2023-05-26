import React from "react";
import logo from "../images/acorn.png"

const getArtist = (props) => {
  const artist = props.state[0];
  if (artist)  {
  console.log(artist.name);
  return artist.name
  }
  return 'Acorn' 
}
const getImg = (props) => {
  const artist = props.state[0];
  if (artist)  {
  console.log(artist);
  return artist.images[2].url
  }
  return logo 
}
const Artist = (props) => (
 
 <div id="artist">
  <img className='band-pic'src={getImg(props)} />
  <p className="artist-name">{getArtist(props)}</p>
   
  </div>
)
export default Artist ;