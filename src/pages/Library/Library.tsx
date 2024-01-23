import React, { useState, useEffect } from "react";

import "./Library.scss";
import "../../assets/scss/style.scss";

import Nav from "../../components/Nav/Nav";
import RecordsContainer from "../../components/RecordsContainer/RecordsContainer";

import { Record } from '../../interfaces/Record';
import { getRecords } from "../../services/RecordService";

const Library: React.FC = () => {
  const [listRecords, setRecord] = useState<Array<Record>>([]);

  useEffect(() => {
    getRecords().then(records => {
      setRecord(records);
    }).catch((error) => {
      alert('Ocorreu um erro ao carregar os albums.');
      console.error(error);
    });
  }, []);

  return (
    <div className="main">
      <Nav></Nav>
      <div className="title">
        <h1>Biblioteca</h1>
      </div>
      <RecordsContainer records={listRecords} />
    </div>
  );

}

export default Library;
