import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = 'e0c08addb9dce27b15dd25ed60160779';

export async function getDetaiils(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY_API}&language=en-US`
  );
  return response.data;
}
