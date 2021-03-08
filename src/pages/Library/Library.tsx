import React, { useState, useEffect } from "react";

import "./Library.scss";
import "../../assets/scss/style.scss";

import Nav from "../../components/Nav/Nav";
import RecordsContainer from "../../components/RecordsContainer/RecordsContainer";

import { getRecords } from "../../services/RecordService";

const Library = () => {

    const [listRecords, setRecord] = useState([]);

    useEffect(() => {

        getRecords().then(records => {

            setRecord(records);

        });

    }, []);

    return (
        <div className="main">
            <Nav></Nav>
            <div className="title">
            <h1>Biblioteca</h1>
            </div>
            <RecordsContainer records={listRecords}></RecordsContainer>
        </div>
    );

}

export default Library;
