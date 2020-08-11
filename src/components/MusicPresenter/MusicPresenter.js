import React, { Component } from "react";
import "./MusicPresenter.css";
// import Background from "../../assets/wish_you_were_here.jpg";

class MusicPresenter extends Component {
  state = {};

  render() {
    const imageUrl = this.props.src;
    const artist = this.props.name;

    return (
      <div
        className="music-container"
        style={{
          backgroundImage:
            "url(" + require("../../assets/images/record/" + imageUrl) + ")"
        }}
      >
        <div className="extra-info">
          <div className="record-name">{imageUrl}</div>
          <div className="artist">{artist}</div>
          <div className="count">
            <div>
              <i className="fa fa-star"></i> 5
            </div>
            <div>
              <i className="fa fa-music"></i> 5
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPresenter;
