import React, { Component } from "react";

import "./Library.css";
import "../../assets/style.css";

import Nav from "../Nav/Nav";
import SliderAlbum from "../SliderAlbum/SliderAlbum";

class Library extends Component {
  state = {};

  render() {

    return (
      <div className="main">
        <Nav></Nav>
        <div className="title">
          <h1>Recentes</h1>
        </div>
        <SliderAlbum key="slider_album"></SliderAlbum>
      </div>
    );
  }
}

export default Library;
