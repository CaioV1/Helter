import { apiURL } from "../utils/Global";

export const getRecords = async() => {

    const response = await fetch(`${apiURL}/record`, {method:"GET"});

    return response.json();

}

export const getRecord = async(recordId) => {

    const response = await fetch(`${apiURL}/record/${recordId}`, {method:"GET"});

    return response.json();

}