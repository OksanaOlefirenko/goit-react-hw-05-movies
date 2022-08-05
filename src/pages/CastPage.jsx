import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader';
import { getCast } from 'moviesAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cast } from 'components/Cast';

const CastPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getCast(movieId)
      .then(results => {
        if (results.length === 0) {
          return toast.error('Sorry, actors not found');
        }
        setActors(results);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <main>
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      {loading && <Loader />}
      {actors && <Cast actors={actors} />}
      {error && <p>Something went wrong, please try again later!g</p>}
    </main>
  );
};

export default CastPage;
