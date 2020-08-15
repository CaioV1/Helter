import { apiURL }  from "../utils/Global";

export const play = async(form) => {

    const response = await fetch(`${apiURL}/audio/play`, {
        method : "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    return response.blob();

}

export const getAudioByRecord = async(record_id) => {

    const response = await fetch(`${apiURL}/audio/record/${record_id}`, {
        method : "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();

}