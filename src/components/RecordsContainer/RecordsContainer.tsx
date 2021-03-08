import React from "react";
import { Link } from "react-router-dom";

import "./RecordsContainer.scss";

import MusicPresenter from "../MusicPresenter/MusicPresenter";

import { Record } from "../../interfaces/Record";

const RecordsContainer = ({records}: any) => {

    return (
      <div className="container" style={{marginBottom: "3rem"}}>
        <div className="row record-row">
        {
            records.map((record: Record) => (
              <Link key={record._id} to={{
                  pathname:"/record_songs/" + record._id,
                  state:record
                }}>
                <MusicPresenter 
                  name={record.title}
                  band={record.band.name}
                  src={record.pathImage}
                ></MusicPresenter>
              </Link>
            ))}
        </div>
      </div>
    );

}

export default RecordsContainer;
