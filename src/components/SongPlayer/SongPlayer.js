import React, { Component } from "react";
import Sound from "react-sound";

export default class SongPlayer extends Component {

  render() {

    const songPath = this.props.name;

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