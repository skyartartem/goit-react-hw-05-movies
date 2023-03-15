import { useState, useEffect } from 'react';
import { getTrends } from 'services/getTrends';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFunc();
  }, []);

  const getFunc = async () => {
    try {
      const data = await getTrends();
      setTrends(data.results);
      setPage(data.page);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {trends.map(movie => {
          return (
            <li key={movie.id}>
              <p>{movie.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
