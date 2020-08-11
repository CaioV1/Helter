import React, { Component } from "react";
import "./SliderAlbum.css";
import { Link } from "react-router-dom";

import MusicPresenter from "../MusicPresenter/MusicPresenter";

class SliderAlbum extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.advance = this.advance.bind(this);
    this.comeBack = this.comeBack.bind(this);

    this.recentContainer = React.createRef();
    this.recentSlide = React.createRef();
    this.counter = 0;
  }

  advance() {
    console.log("Avançando");

    this.counter++;
    console.log(this.counter);

    this.recentSlide.current.style.transition = "transform 0.4s ease-in-out";
    if (this.counter >= 5) {
      this.counter = 0;
    }
    this.recentSlide.current.style.transform =
      "translateX(" + -302 * this.counter + "px)";
  }

  comeBack() {
    console.log("Retornando");

    this.counter--;

    console.log(this.counter);

    this.recentSlide.current.style.transition = "transform 0.4s ease-in-out";

    if (this.counter <= -1) {
      this.counter = 4;
    }

    this.recentSlide.current.style.transform =
      "translateX(" + -302 * this.counter + "px)";
  }

  setupLoop() {
    const albumArray = this.props.albumArray;
    const componentArray = albumArray.map(album => (
      <Link to="/record_songs">
        <MusicPresenter
          key={album.name}
          name={album.name}
          src={album.src}
        ></MusicPresenter>
      </Link>
    ));

    return componentArray;
  }

  render() {
    const componentArray = this.setupLoop();
    return (
      <div className="test">
        <div onClick={this.comeBack} className="button-nav">
          <i class="fa fa-angle-left"></i>
        </div>
        <div className="recent-container" ref={this.recentContainer}>
          <div className="slider-container" ref={this.recentSlide}>
            {componentArray}
          </div>
        </div>
        <div onClick={this.advance} className="button-nav">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    );
  }
}

export default SliderAlbum;
