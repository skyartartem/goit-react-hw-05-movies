import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/getCredits';
const BASE_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  //   const [crew, setCrew] = useState([]);

  useEffect(() => {
    getFunc(movieId);
  }, [movieId]);

  const getFunc = async id => {
    try {
      const data = await getCredits(id);
      setCast(data.cast);
      //   setCrew(data.crew);
      //   setPage(data.page);
    } catch (error) {
      console.log(error);
      //   setError(error);
    }
  };
console.log(cast);
  return (
    <div>
      {/* <h3>Cast</h3> */}
      <ul>
        {cast.map(item => {
          
          return (
            <li key={item.cast_id}>
              <img src={`${BASE_URL}${item.profile_path}`} alt={item.name} />
              <p>{item.name}</p>
              <p>Caracter: {item.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
