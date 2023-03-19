import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useState, useEffect, useRef, Suspense } from 'react';
import { getDetaiils } from 'services/getDetails';
import {
  Card,
  Description,
  Wrapper,
  BackLink,
  // StyledImg
} from './MovieDetails.styled';
const BASE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const backLink = useRef(location.state?.from ?? '/movies');

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
      setError(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <h2>Somethig goes wrong...</h2>}

      <BackLink to={backLink.current}>
        <FaArrowLeft size="10" /> Go back
      </BackLink>

      <Card>
        <img
          src={`${BASE_URL}${movie.poster_path}`}
          alt={movie.name}
        />
        {!loading && (
          <Description>
            <h2>
              {movie.title} ({movie.release_date?.substr(0, 4)})
            </h2>
            <p>User Score: {Math.floor(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres?.map(item => item.name).join(', ')}</p>
          </Description>
        )}
      </Card>
      <h3>Additional information</h3>
      <Wrapper>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
