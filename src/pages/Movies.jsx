import SearchBar from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSearch } from 'services/getSearch';
const Movies = () => {
  const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

    
     useEffect(() => {
       getFunc(search);
     }, [search]);

     const getFunc = async (query) => {
       try {
         const data = await getSearch(query);
         setMovies(data.results);
        //  setPage(data.page);
       } catch (error) {
         console.log(error);
        //  setError(error);
       }
     };
    
    
  const handleSubmit = query => {
      setSearch(query);
  };

  return (
    <div>
          <SearchBar handleSubmit={handleSubmit} />
          <ul>
              {movies.map(movie => {
                  return (
                      <li key={movie.id}>
                          <Link to={`${movie.id}`} >{movie.title}</Link>
                      </li>
                  )
               })}
          </ul>
    </div>
  );
};

export default Movies;
