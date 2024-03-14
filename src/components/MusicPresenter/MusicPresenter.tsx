import React from "react";

import "./MusicPresenter.scss";

import { apiURL } from "../../utils/Global";

interface MusicPresenterProps {
  src: string;
  name: string;
  band: string;
}

const MusicPresenter: React.FC<MusicPresenterProps> = ({ src, name, band }) => {
  const imageUrl = apiURL.replace("api", "") + src;

  return (
    <div className="card" style={{ width: "18rem", backgroundColor: "transparent", marginTop: "2rem" }}>
      <div className="card-body" style={{ padding: 0 }}>
        <div className="music-container" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="extra-info">
            <div className="record-name">{name}</div>
            <div className="artist">{band}</div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default MusicPresenter;
