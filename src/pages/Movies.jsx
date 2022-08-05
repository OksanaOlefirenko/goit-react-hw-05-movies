import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBox } from 'components/SearchBox';
import { Loader } from 'components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovie } from '../moviesAPI';
import { MoviesList } from 'components/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const newSearchQuery = searchParams.get('query');

  useEffect(() => {
    if (newSearchQuery) {
      fetchSearchMovie(newSearchQuery);
    }
    setSearchQuery(newSearchQuery);
  }, [newSearchQuery]);

  const fetchSearchMovie = async query => {
    try {
      setLoading(true);
      const items = await getSearchMovie(query);
      if (items.length === 0) {
        return toast.error(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }
      setMovies(items);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = newSearchQuery => {
    if (newSearchQuery === searchQuery) return;
    setSearchParams({ query: newSearchQuery });
  };

  return (
    <main>
      <ToastContainer theme="colored" position="top-right" autoClose={3000} />
      <SearchBox onSubmit={handleFormSubmit} />
      {error && toast.error(`Whoops, something went wrong: ${error.message}`)}
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
