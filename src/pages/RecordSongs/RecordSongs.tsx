import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./RecordSongs.scss";
import "../../assets/scss/style.scss";

import Nav from "../../components/Nav/Nav";
import SongPlayer from "../../components/SongPlayer/SongPlayer";

import { apiURL } from "../../utils/Global";
import { getAudioByRecord } from "../../services/AudioService";

import { Song } from "../../interfaces/Song";
import { Record } from "../../interfaces/Record";

const RecordSongs: React.FC = () => {

  const location = useLocation();
  const record: Record = location.state;

  const [songs, setSongs] = useState<Array<Song>>([]);
  const [playSong, setPlaySong] = useState<boolean>(false);
  const [urlSong, setUrlSong] = useState<string>("");
  const [pathImage, setPathImage] = useState<string>("");

  const firesSong = (audioId: string) => {
    setPlaySong(true);
    setUrlSong(apiURL + "/audio/play/" + audioId);
  }

  useEffect(() => {
    setPathImage(apiURL.replace("api", "") + record.pathImage);
    getAudioByRecord(record._id).then((data) => {
      setSongs(data);
    });

  }, [record]);

  return (
    <div className="record-container">
      <Nav></Nav>
      {playSong ? <SongPlayer songPath={urlSong} /> : null}
      <div className="album-cover" style={{ backgroundImage: `url(${pathImage})` }}></div>
      <div className="songs-list">
        <div className="album-title">{record.title}</div>
        <div className="album-title" style={{ fontSize: 20 }}>
          {record.band.name}
        </div>
        {
          songs.map((song: Song) => (
            <div className="song-item" key={song._id}>
              <div className="song-info">
                <div className="song-play" onClick={() => firesSong(song._id)}>
                  <i className="fa fa-play"></i>
                </div>
                <span className="song-title">{song.title}</span>
                <span className="song-author">{song.authors.map((author) => (author.name))}</span>
              </div>
              <div className="song-action">
                <i className="fa fa-heart"></i>
                <i className="fa fa-plus"></i>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default RecordSongs;
