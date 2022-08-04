import PropTypes from 'prop-types';
import { ReviewsBox, List, Item, Title } from './Reviews.styled';

export const Reviews = ({ reviews }) => {
  return (
    <ReviewsBox>
      <List>
        {reviews.map(({ id, content, author }) => (
          <Item key={id}>
            <Title>{author}</Title>
            <p>{content}</p>
          </Item>
        ))}
      </List>
    </ReviewsBox>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};
