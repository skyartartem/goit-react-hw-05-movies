import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrends } from 'services/getTrends';

const Home = () => {
  const [trends, setTrends] = useState([]);
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(null);

  useEffect(() => {
    getFunc();
  }, []);

  const getFunc = async () => {
    try {
      const data = await getTrends();
      setTrends(data.results);
    //   setPage(data.page);
    } catch (error) {
      console.log(error);
    //   setError(error);
    }
  };

  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {trends.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
