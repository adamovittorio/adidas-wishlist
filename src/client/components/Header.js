import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AdidasLogo from '../assets/adidas-logo.png';

import SearchBar from './SearchBar';
import { Title } from './Commons';

const Wrapper = styled.div`
  margin: 3.5em 0em 1.5em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.div`
  width: 256px;
  height: 173px;
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin: 0em 0em 1em 0em;
`;

const Header = ({ title, search, clearSearch }) => {
  return (
    <Wrapper>
      <Logo url={AdidasLogo} />
      {title && <Title> {title} </Title>}
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
  title: null,
  search: null,
  clearSearch: null,
};

export default Header;
