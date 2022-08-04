import { MoviesList } from 'components/MoviesList';
import { Loader } from 'components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchMovies } from 'hooks';
import { Title } from './Home.styled';

export const Home = () => {
  const { movies, loading, error } = useFetchMovies();
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
