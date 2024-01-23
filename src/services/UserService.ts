import { apiURL } from "../utils/Global"

export const getUser = async () => {
  const response = await fetch(`${apiURL}/user`, {method: "GET"});
  return response.json();
};

export const insertUser = async (form: { name: string }) => {
  const response = await fetch(`${apiURL}/user`, {
    method: "POST", 
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }, 
    body: JSON.stringify(form)
  });

  return response.status;
};
