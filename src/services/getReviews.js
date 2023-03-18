import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = 'e0c08addb9dce27b15dd25ed60160779';

export async function getReviews(id, page=1) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY_API}&language=en-US&page=${page}`
  );
  return response.data;
}
