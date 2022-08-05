import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getPopularMovies } from '../../moviesAPI';
import { useState, useEffect } from 'react';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const items = await getPopularMovies();
        setMovies(items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      <Title>Trending today</Title>
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      {loading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
