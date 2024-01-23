import React from "react";
import { Link } from "react-router-dom";

import "./RecordsContainer.scss";

import MusicPresenter from "../MusicPresenter/MusicPresenter";

import { Record } from "../../interfaces/Record";

interface RecordsContainerProps {
  records: Array<Record>;
}

const RecordsContainer: React.FC<RecordsContainerProps> = ({ records }) => (
  <div className="container record-container">
    <div className="row record-row">
      {
        records.map((record: Record) => (
          <Link key={record._id} to={"/record_songs/" + record._id} state={record}>
            <MusicPresenter
              name={record.title}
              band={record.band.name}
              src={record.pathImage}
            ></MusicPresenter>
          </Link>
        ))
      }
    </div>
  </div>
);

export default RecordsContainer;
