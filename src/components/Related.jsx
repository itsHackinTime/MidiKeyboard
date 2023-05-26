import React, { useEffect, useState} from "react";
import logo from "../images/acorn.png"

const getArtist = (related) => {
  const name = related.name ;
  if (name)  {
  return name
  }
  return 'Owen' 
}
const getImg = (related) => {
  if (related.images)  {
  console.log(related.images);
  return related.images[2].url
  }
  return logo 
//   <img className='band-pic'src={getImg(props)} />
//   <p>{getArtist(props)}</p>
}

const makeCards = (artist) => {
  return artist.map((el, i) => {
    return (
      <div key={`rcard${i}`} className={`related div${i+1}`}>
        <img src={getImg(el)}className="band-pic"></img>
        <p className="artist-name">{getArtist(el)}</p>
      </div>
    )
  }) 
}
const Related = (props) => {
const relatedArr = props.related.artists
console.log(relatedArr)
if (relatedArr) {
  console.log('arg!')
  const cards = makeCards(relatedArr);
  return <div id="related-tree">{cards}</div>
}
  
 return  <div id="related">...</div>

}
export default Related;