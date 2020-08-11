import React, { Component } from "react";

import "./Library.css";
import "../../assets/style.css";

import Nav from "../Nav/Nav";
import SliderAlbum from "../SliderAlbum/SliderAlbum";

class Library extends Component {
  state = {};

  render() {
    const albumArray = [
      { name: "The Beatles", src: "abbey_road.jpg" },
      { name: "The Rolling Stones", src: "letitbleed.jpg" },
      { name: "ACDC", src: "highway_to_hell.jpg" },
      { name: "Pink Floyd", src: "wish_you_were_here.jpg" },
      { name: "Queen", src: "A_night_at_the_opera.jpg" },
      { name: "Elton John", src: "dont_shot_me.jpg" },
      { name: "Bob Dylan", src: "freewheelin_bob_dylan.jpg" },
      { name: "Kendrick Lamar", src: "damn.jpg" }
    ];

    return (
      <div className="main">
        <Nav></Nav>
        <div className="title">
          <h1>Recentes</h1>
        </div>
        <SliderAlbum albumArray={albumArray}></SliderAlbum>
      </div>
    );
  }
}

export default Library;
