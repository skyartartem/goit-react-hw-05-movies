import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getDetaiils } from 'services/getDetails';
const BASE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');
  const [movie, setMovie] = useState({});
  const [loading, setloading] = useState(false);

  //   const [error, setError] = useState(null);

  useEffect(() => {
    getFunc(movieId);
  }, [movieId]);

  const getFunc = async id => {
    setloading(true);
    try {
      const data = await getDetaiils(id);
      setMovie(data);
      //   setPage(data.page);
    } catch (error) {
      console.log(error);
      //   setError(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <div>
      {loading && <div>loading...</div>}
      <Link to={backLink.current}>Go back</Link>

      <div>
        <img src={`${BASE_URL}${movie.poster_path}`} alt="" />
        {!loading && (
          <div>
            <h2>
              {movie.title} ({movie.release_date?.substr(0, 4)})
            </h2>
            <p>User Score: {Math.floor(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres?.map(item => item.name).join(', ')}</p>
          </div>
        )}

        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
