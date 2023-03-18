import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/getReviews';


const Reviews = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    getFunc(movieId);
  }, [movieId]);

  const getFunc = async id => {
    try {
      const data = await getReviews(id);
      setResults(data.results);
      //   setPage(data.page);
    } catch (error) {
      console.log(error);
      //   setError(error);
    }
  };
  console.log(results);
  return (
    <div>
      
      {results.length===0 ?( <div>We don't have any review information</div>): (<ul>
        {results.map(item => {
          return (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>)  }
    </div>
  );
};

export default Reviews;
