import PropTypes from 'prop-types';
import { Container, List } from './MoviesList.styled';
import { MovieListItem } from 'components/MovieListItem';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      <List>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
