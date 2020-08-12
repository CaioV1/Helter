import { apiURL } from "../utils/Global";

export const getRecords = async() => {

    const response = await fetch(`${apiURL}/record`, {method:"GET"});

    return response.json();

}