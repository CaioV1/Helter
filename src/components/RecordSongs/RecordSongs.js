import React, { Component } from "react";
import "../../assets/scss/style.scss";

import { apiURL } from "../../utils/Global";
import "./RecordSongs.scss";
import SongPlayer from "../SongPlayer/SongPlayer";
import Nav from "../shared/Nav/Nav";
import { getAudioByRecord } from "../../services/AudioService";

class RecordSongs extends Component {

  state = {};

  constructor(props) {

    super(props);

    this.firesSong = this.firesSong.bind(this);
    this.state = { playSong: false, audios: [], urlAudio: "" };

    this.record = this.props.location.state.record;

  }

  componentDidMount(){

    getAudioByRecord(this.props.match.params.record_id).then((data)=>{

      this.setState({audios: data});
      

    })

  }

  firesSong(audioId) {

    console.log(apiURL + "/audio/play/" + audioId);

    this.setState({ playSong: true, urlAudio: apiURL + "/audio/play/" + audioId });
    
  }

  render() {

    const pathImage = apiURL.replace("api", "") + this.record.pathImage;
    //background-image: linear-gradient(270deg, rgba(37, 46, 57, 0), rgb(37, 46, 57) 80%), url("https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ed33d5a388aecfcb7dd89480fe1569968ce4a7e0a127e02897b49d5086d05398._RI_V_TTW_SX1500_BL40_FMJPG_.jpg");

    return (
      <div className="record-container">
        <Nav></Nav>
        {this.state.playSong ? <SongPlayer name={this.state.urlAudio} /> : null}
        <div className="album-cover" style={{ backgroundImage: `url(${pathImage})` }}></div>
        <div className="songs-list">
          <div className="album-title">{this.record.title}</div>
          <div className="album-title" style={{ fontSize: 20 }}>
            {this.record.band.name}
          </div>
          {
            this.state.audios.map(audio => (
              <div className="song-item">
                <div className="song-info">
                  <div className="song-play" onClick={() => this.firesSong(audio._id)}>
                    <i className="fa fa-play"></i>
                  </div>
                  <span className="song-title">{audio.title}</span>
                  <span className="song-author">{audio.authors.map(author => ( author.name))}</span>
                </div>
                <div className="song-action">
                  <i className="fa fa-heart"></i>
                  <i className="fa fa-plus"></i>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default RecordSongs;
