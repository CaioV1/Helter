import React, { Component } from "react";
import "./MusicPresenter.css";
import { apiURL } from "../../utils/Global";

class MusicPresenter extends Component {
  state = {};

  render() {

    const imageUrl =  apiURL.replace("api", "") + this.props.src;
    const albumName = this.props.name;
    const bandName = this.props.band;

    return (
        <div className="card" style={{width: "18rem", backgroundColor: "transparent", marginTop: "2rem"}}>
          <div className="card-body" style={{padding: 0}}>
          <div className="music-container" style={{backgroundImage: `url(${imageUrl})`}}>
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
