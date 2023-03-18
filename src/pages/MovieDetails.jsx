import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetaiils } from 'services/getDetails';

const MovieDetails = () => {
  const { movieId } = useParams();

//   const [id, setId] = useState(movieId);
    const [movie, setMovie] = useState({});
//   const [error, setError] = useState(null);

  useEffect(() => {
    getFunc(movieId);
  }, [movieId]);

  const getFunc = async id => {
    try {
      const data = await getDetaiils(id);
      setMovie(data);
      //   setPage(data.page);
    } catch (error) {
      console.log(error);
    //   setError(error);
    }
  };
    return (
      <div>
        <Link to="/movies">Go back</Link>
        <h2>{movie.title}</h2>
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
    );
};

export default MovieDetails;
