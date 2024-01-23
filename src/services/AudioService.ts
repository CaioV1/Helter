import { apiURL } from "../utils/Global";
import { Song } from '../interfaces/Song';

export const getAudioByRecord = async (recordId: string): Promise<Array<Song>> => {
  const response = await fetch(`${apiURL}/audio/record/${recordId}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}