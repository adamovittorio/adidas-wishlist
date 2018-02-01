import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import { Title } from './Commons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

const Header = ({ title, search, clearSearch }) => {
  return (
    <Wrapper>
      <Title> {title} </Title>
      {search && <SearchBar search={search} clearSearch={clearSearch} />}
    </Wrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.func,
  clearSearch: PropTypes.func,
};
Header.defaultProps = {
  title: 'Header',
  search: null,
  clearSearch: null,
};

export default Header;
