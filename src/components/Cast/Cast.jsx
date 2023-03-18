import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/getCredits';
import { List } from './Cast.styled';
const BASE_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  //   const [crew, setCrew] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getFunc(movieId);
  }, [movieId]);

  const getFunc = async id => {
    setloading(true);
    try {
      const data = await getCredits(id);
      setCast(data.cast);
      //   setCrew(data.crew);
      //   setPage(data.page);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setloading(false);
    }
  };
// console.log(cast);
  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <h2>Somethig goes wrong...</h2>}
      <List>
        {cast.map(item => {
          return (
            <li key={item.cast_id}>
              <img src={`${BASE_URL}${item.profile_path}`} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Caracter: {item.character}</p>
            </li>
          );
        })}
      </List>
    </div>
  );
};

export default Cast;
