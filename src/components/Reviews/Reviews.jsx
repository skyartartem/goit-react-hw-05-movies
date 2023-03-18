import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/getReviews';
import { List } from './Reviews.styled';

const Reviews = () => {

  const { movieId } = useParams();
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getFunc(movieId);
  }, [movieId]);

  const getFunc = async id => {
    setloading(true);
    try {
      const data = await getReviews(id);
      setResults(data.results);
      //   setPage(data.page);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setloading(false);
    }
  };
  // console.log(results);
  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <h2>Somethig goes wrong...</h2>}
      {results.length === 0 ? (
        <div>We don't have any review information</div>
      ) : (
        <List>
          {results.map(item => {
            return (
              <li key={item.id}>
                <h3>Author: {item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default Reviews;
