import { useLocation } from 'react-router-dom';
import { Link, Item, Poster, Title } from './MovieListItem.styled';
import PropTypes from 'prop-types';

export const MovieListItem = ({ movie }) => {
  const { id, poster_path, title } = movie;
  const location = useLocation();
  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <Item>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt={title}
        />
        <Title>{title}</Title>
      </Item>
    </Link>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
