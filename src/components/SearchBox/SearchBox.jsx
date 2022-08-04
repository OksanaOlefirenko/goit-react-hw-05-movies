import { Wrapper, SearchForm, Input, SearchButton } from './SearchBox.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

export const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.warn('Please, enter search movie');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };
  return (
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
          onChange={handleQueryChange}
        />
        <SearchButton type="submit">
          <FaSearch size={20}></FaSearch>
        </SearchButton>
      </SearchForm>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
