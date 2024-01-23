import { Record } from '../interfaces/Record';
import { apiURL } from "../utils/Global";

export const getRecords = async (): Promise<Array<Record>> => {
  const response = await fetch(`${apiURL}/record`, {method:"GET"});
  return response.json();
}

export const getRecord = async (recordId: string): Promise<Record> => {
  const response = await fetch(`${apiURL}/record/${recordId}`, {method:"GET"});
  return response.json();
}