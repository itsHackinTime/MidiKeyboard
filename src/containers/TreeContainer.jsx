import React from "react";
import Artist from "../components/Artist";
import Related from "../components/Related";
const TreeContainer = (props) => (
  <div id="tree-container">
    <Artist state={props.state.artist}/>
    <Related related={props.state.related}/>
  </div>
)
export default TreeContainer