import { apiURL }  from "../utils/Global";

export const play = async (form) => {

    const response = await fetch(`${apiURL}/audio/play`, {
        method : "GET",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(form)
    });

    return response.blob;

}