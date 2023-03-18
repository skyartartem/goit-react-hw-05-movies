import SearchBar from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearch } from 'services/getSearch';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  //   const [search, setSearch] = useState('');
  //   const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    getFunc(query);
  }, [query]);

  const getFunc = async query => {
    setloading(true)
    try {
      const data = await getSearch(query);
      setMovies(data.results);
      //  setPage(data.page);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setloading(false);
    }
  };

  const handleSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
      // setSearchParams(query);
  };

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {loading && <div>loading...</div>}
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {error && <h2>Somethig goes wrong...</h2>}
    </div>
  );
};

export default Movies;
