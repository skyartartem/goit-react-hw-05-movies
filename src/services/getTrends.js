import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = 'e0c08addb9dce27b15dd25ed60160779';

export async function getTrends(page=1) {
 
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${KEY_API}&page=${page}`
    );
    return response.data;
}
