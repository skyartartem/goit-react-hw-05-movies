import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/getCredits';

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

  return (
    <div>
      <h3>Cast id-{movieId}</h3>

      <ul>
        {cast.map(item => {
          return <li key="{item.id}">{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cast;
