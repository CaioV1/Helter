import React, { Component } from "react";
import "../../assets/style.css";

import "./RecordSongs.css";
import SongPlayer from "../SongPlayer/SongPlayer";
import Nav from "../Nav/Nav";
import { getAudioByRecord } from "../../services/AudioService";

class RecordSongs extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.firesSong = this.firesSong.bind(this);
    this.state = { playSong: false, audios: [], urlAudio: "" };

  }

  componentDidMount(){

    getAudioByRecord(this.props.match.params.record_id).then((data)=>{

      this.setState({audios: data});
      console.log(data);
      

    })

  }

  firesSong(audioId) {

    this.setState({ playSong: true, urlAudio: "http://localhost:5000/api/audio/play/" + audioId });
  }

  render() {

    return (
      <div className="record-container">
        <Nav></Nav>
        {this.state.playSong ? <SongPlayer name={this.state.urlAudio} /> : null}
        <div className="album-cover"></div>
        <div className="songs-list">
          <div className="album-title">Abbey Road</div>
          <div className="album-title" style={{ fontSize: 20 }}>
            The Beatles
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
