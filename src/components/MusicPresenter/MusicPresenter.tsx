import React from "react";

import "./MusicPresenter.scss";

import { apiURL } from "../../utils/Global";

const MusicPresenter = (props: any) => {

    const imageUrl =  apiURL.replace("api", "") + props.src;
    const albumName = props.name;
    const bandName = props.band;

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

export default MusicPresenter;
