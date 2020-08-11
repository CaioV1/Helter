import { apiURL } from "../utils/Global"

export const getUser = async () => {

  const response = await fetch(`${apiURL}/user`, {method: "GET"});

  return response.json();

};

export const insertUser = async (form) => {

  console.log(form);

  const response = await fetch(`${apiURL}/user`, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    }, 
    body: JSON.stringify(form)});

  return response.status;

};
