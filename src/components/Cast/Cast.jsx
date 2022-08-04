import PropTypes from 'prop-types';
import { CastBox, List, Item, Img, Name, Character } from './Cast.styled';

export const Cast = ({ actors }) => {
  return (
    <CastBox>
      <List>
        {actors.map(({ id, name, profile_path, character }) => (
          <Item key={id}>
            <Img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
              }
              alt={name}
            />
            <Name>{name}</Name>
            <Character>{character}</Character>
          </Item>
        ))}
      </List>
    </CastBox>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};
