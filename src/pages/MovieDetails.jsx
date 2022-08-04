import { MovieInfo } from 'components/MovieInfo';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'moviesAPI';
import { Loader } from 'components/Loader';
import { BackLink } from 'components/BackLink';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/movies';

  useEffect(() => {
    async function fetchMovieById() {
      setLoading(true);
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref}> Go back</BackLink>
      {loading && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      {error && <p>Something went wrong, please try again later!</p>}
    </main>
  );
};
