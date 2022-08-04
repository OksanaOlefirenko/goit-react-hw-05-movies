import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader';
import { getCast } from 'moviesAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cast } from 'components/Cast';

export const CastPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState(null);

  useEffect(() => {
    async function fetchCastById() {
      setLoading(true);
      try {
        const actors = await getCast(movieId);
        setActors(actors);
      } catch (error) {
        toast.error('Actors not found');
      } finally {
        setLoading(false);
      }
    }
    fetchCastById();
  }, [movieId]);

  return (
    <main>
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      {loading && <Loader />}
      {actors && <Cast actors={actors} />}
    </main>
  );
};
