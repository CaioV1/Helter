import React, { Component } from "react";
import "./Favorites.css";

import Nav from "../shared/Nav/Nav";
// import SliderAlbum from "../SliderAlbum/SliderAlbum";

class Favorites extends Component {
  state = {};
  render() {
    return (
      <div className="favorites">
        <Nav></Nav>
        <h1>Favorites</h1>
        {/* <SliderAlbum></SliderAlbum> */}
      </div>
    );
  }
}

export default Favorites;
