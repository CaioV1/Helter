import React, { Component } from "react";

import "./Library.css";
import "../../assets/style.css";

import Nav from "../Nav/Nav";
import RecordsContainer from "../RecordsContainer/RecordsContainer";
import { getRecords } from "../../services/RecordService";

class Library extends Component {

  state = {};

  constructor(props) {
    super(props);

    this.state = { data: [] }

  }

  componentDidMount(){

    getRecords().then((data)=>{
      
      this.setState({data})

    })

  }

  render() {

    return (
      <div className="main">
        <Nav></Nav>
        <div className="title">
          <h1>Recentes</h1>
        </div>
        <RecordsContainer key="records_container" records={this.state.data}></RecordsContainer>
      </div>
    );
  }
}

export default Library;
