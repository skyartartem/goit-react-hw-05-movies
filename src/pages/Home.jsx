import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrends } from 'services/getTrends';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getFunc();
  }, []);

  const getFunc = async () => {
    setloading(true);
    try {
      const data = await getTrends();
      setTrends(data.results);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
      <h2>Tranding today</h2>
      {loading && <div>loading...</div>}
      <ul>
        {trends.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
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
export default Home;
