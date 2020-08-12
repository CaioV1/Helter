import React, { Component } from "react";
import Sound from "react-sound";
//import { play } from "../../services/AudioService";
//import soundfile from "../../assets/test.mp3";

export default class SongPlayer extends Component {

  render() {

    const songPath = this.props.name;
    
    // const form = {
    //   name : songPath
    // };

    // const status = play(form);

    console.log(songPath);
    //console.log(status);

    return (
      <Sound
        url={songPath}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}
