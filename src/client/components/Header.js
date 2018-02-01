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

const Header = (props) => {
  return (
    <Wrapper>
      <Title> {props.title} </Title>
      {props.search && <SearchBar search={props.search} />}
    </Wrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.func,
};
Header.defaultProps = {
  title: 'Header',
  search: null,
};

export default Header;
