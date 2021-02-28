import React, { Component } from "react";
import "./RecordsContainer.css";
import { Link } from "react-router-dom";
import MusicPresenter from "../MusicPresenter/MusicPresenter";

class RecordsContainer extends Component {
  state = {};

  render() {

    return (
      <div className="container" style={{marginBottom: "3rem"}}>
        <div className="row record-row">
        {
            this.props.records.map(record => (
              <Link to={{
                  pathname:"/record_songs/" + record._id,
                  state: {
                    record: record
                  }
                }}>
                <MusicPresenter
                  key={record._id} 
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
}

export default RecordsContainer;
