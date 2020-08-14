import React, { Component } from "react";
import "./MusicPresenter.css";
// import Background from "../../assets/wish_you_were_here.jpg";

class MusicPresenter extends Component {
  state = {};

  render() {

    const imageUrl = this.props.src;
    const albumName = this.props.name;
    const bandName = this.props.band;

    return (
        <div className="card" style={{width: "18rem", backgroundColor: "transparent", marginTop: "2rem"}}>
          <div className="card-body" style={{padding: 0}}>
          <div className="music-container" style={{backgroundImage: "url(" + require("../../assets/images/record/" + imageUrl) + ")"}}>
            <div className="extra-info">
              <div className="record-name">{albumName}</div>
              <div className="artist">{bandName}</div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default MusicPresenter;
