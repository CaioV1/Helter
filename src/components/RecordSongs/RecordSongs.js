import React, { Component } from "react";
import "../../assets/style.css";

import "./RecordSongs.css";
import SongPlayer from "../SongPlayer/SongPlayer";
import Nav from "../Nav/Nav";
import { getUser, insertUser } from "../../services/UserService";

class RecordSongs extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.firesSong = this.firesSong.bind(this);
    this.getUser = this.getUser.bind(this);
    this.state = { playSong: false };

    this.getUser();
  }

  async getUser() {
    const result = await getUser();

    console.log(result);

    const form = {
      "name": "Arthur",
      "last_name": "Fleck",
      "username": "ArthurF1",
      "password": "12345"};

    const status = await insertUser(form);

    console.log(status);
  }

  firesSong() {
    console.log("QQQQQQQQQQQQQQQQQQQQQ");

    this.setState({ playSong: true });
  }

  render() {

    const name = "http://localhost:5000/api/audio/play/%2fUsers%2fcaiomorais%2fDownloads%2fBob Dylan - Like a Rolling Stone.mp3";

    return (
      <div className="record-container">
        <Nav></Nav>
        {this.state.playSong ? <SongPlayer name={name} /> : null}
        <div className="album-cover"></div>
        <div className="songs-list">
          <div className="album-title">Abbey Road</div>
          <div className="album-title" style={{ fontSize: 20 }}>
            The Beatles
          </div>
          <div className="song-item">
            <div className="song-info">
              <div className="song-play" onClick={this.firesSong}>
                <i className="fa fa-play"></i>
              </div>
              <span className="song-title">Come Together</span>
              <span className="song-author">Lennon/McCartney</span>
            </div>
            <div className="song-action">
              <i className="fa fa-heart"></i>
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <div className="song-item">
            <div className="song-info">
              <div className="song-play" onClick={this.firesSong}>
                <i className="fa fa-play"></i>
              </div>
              <span className="song-title">Something</span>
              <span className="song-author">George Harrinson</span>
            </div>
            <div className="song-action">
              <i className="fa fa-heart"></i>
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <div className="song-item">
            <div className="song-info">
              <div className="song-play" onClick={this.firesSong}>
                <i className="fa fa-play"></i>
              </div>
              <span className="song-title">Maxwell's Silver Hammer</span>
              <span className="song-author">Lennon/McCartney</span>
            </div>
            <div className="song-action">
              <i className="fa fa-heart"></i>
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <div className="song-item">
            <div className="song-info">
              <div className="song-play" onClick={this.firesSong}>
                <i className="fa fa-play"></i>
              </div>
              <span className="song-title">Octupus's Garden</span>
              <span className="song-author">Ringo Starr</span>
            </div>
            <div className="song-action">
              <i className="fa fa-heart"></i>
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <div className="song-item">
            <div className="song-info">
              <div className="song-play" onClick={this.firesSong}>
                <i className="fa fa-play"></i>
              </div>
              <span className="song-title">Here Comes The Sun</span>
              <span className="song-author">George Harrinson</span>
            </div>
            <div className="song-action">
              <i className="fa fa-heart"></i>
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <div className="song-item">
            <div className="song-info">
              <div className="song-play" onClick={this.firesSong}>
                <i className="fa fa-play"></i>
              </div>
              <span className="song-title">I Want You (She's So Heavy)</span>
              <span className="song-author">Lennon/McCartney</span>
            </div>
            <div className="song-action">
              <i className="fa fa-heart"></i>
              <i className="fa fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecordSongs;
