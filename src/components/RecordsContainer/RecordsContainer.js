import React, { Component } from "react";
import "./RecordsContainer.css";
import { Link } from "react-router-dom";
import MusicPresenter from "../MusicPresenter/MusicPresenter";

class SliderAlbum extends Component {
  state = {};

  render() {

    return (
      <div className="container" style={{marginBottom: "3rem"}}>
        <div className="row record-row">
        {
            this.props.records.map(album => (
              <Link to={{pathname:"/record_songs/" + album._id}}>
                <MusicPresenter
                  key={album._id} 
                  name={album.title}
                  band={album.band.name}
                  src={album.pathImage}
                ></MusicPresenter>
              </Link>
            ))}
        </div>
      </div>
    );
  }
}

export default SliderAlbum;
