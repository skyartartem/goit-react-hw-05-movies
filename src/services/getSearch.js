import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = 'e0c08addb9dce27b15dd25ed60160779';
//api.themoviedb.org/3/search/movie?api_key=e0c08addb9dce27b15dd25ed60160779&language=en-US&page=1&include_adult=false

export async function getSearch(query, page = 1) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY_API}&language=en-US&page=${page}&include_adult=true&query=${query}`
  );
  return response.data;
}
