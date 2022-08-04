import {
  Container,
  Image,
  Info,
  Title,
  AddInfo,
  Link,
} from './MovieInfo.styled';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export const MovieInfo = ({ movie }) => {
  const { title, overview, poster_path, release_date, vote_average, genres } =
    movie;

  const location = useLocation();

  const genresAll = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <Container>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt={title}
        />
        <Info>
          <Title>{title}</Title>
          <h2> {release_date}</h2>
          <p> User Score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresAll}</p>
        </Info>
      </Container>

      <div>
        <AddInfo>Additional information</AddInfo>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
