import { getPopularMovies } from '../moviesAPI';
import { useState, useEffect } from 'react';

export const useFetchMovies = () => {
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
  return { movies, loading, error };
};
