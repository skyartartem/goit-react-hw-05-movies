import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDetaiils } from 'services/getDetails';

const MovieDetails = () => {
  const { movieId } = useParams();

//   const [id, setId] = useState(movieId);
    const [movie, setMovie] = useState({});
//   const [error, setError] = useState(null);

  useEffect(() => {
    getFunc(movieId);
  }, [movieId]);

  const getFunc = async id => {
    try {
      const data = await getDetaiils(id);
      setMovie(data);
      //   setPage(data.page);
    } catch (error) {
      console.log(error);
    //   setError(error);
    }
  };
    return <div>
        <h2>{movie.title}</h2>
        
    </div>;
};

export default MovieDetails;
