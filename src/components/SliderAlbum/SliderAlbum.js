import React, { Component } from "react";
import "./SliderAlbum.css";
import { Link } from "react-router-dom";
import { getRecords } from "../../services/RecordService";

import MusicPresenter from "../MusicPresenter/MusicPresenter";

class SliderAlbum extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.setupLoop();

    this.advance = this.advance.bind(this);
    this.comeBack = this.comeBack.bind(this);

    this.recentContainer = React.createRef();
    this.recentSlide = React.createRef();
    this.counter = 0;

    this.state = {

      records: []

    }

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

    const recordsArray = getRecords();
    recordsArray.then((data)=>{

      this.setState({records: data})

    })

  }

  render() {

    return (
      <div className="test">
        <div onClick={this.comeBack} className="button-nav">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="recent-container" ref={this.recentContainer}>
          <div className="slider-container" ref={this.recentSlide}>
            {
            this.state.records.map(album => (
              <Link to={{pathname:"/record_songs/" + album._id}}>
                <MusicPresenter
                  key={album._id} 
                  name={album.title}
                  src={album.pathImage}
                ></MusicPresenter>
              </Link>
            ))}
          </div>
        </div>
        <div onClick={this.advance} className="button-nav">
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    );
  }
}

export default SliderAlbum;
