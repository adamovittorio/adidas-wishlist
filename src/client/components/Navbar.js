import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Badge, Link } from '../components/Commons';

import ArticleType from '../types/react/ArticleType';

import { SEARCH, WISHLIST } from '../types/routes';

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  height: 40px;
  display: flex;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
`;

const NavList = styled.ul`
  width: 100%;
  margin: 0px;
  padding: 0px 0px 0px 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const NavElement = styled.li`
  padding: 0px 50px 0px 0px;
  display: flex;
  align-self: center;
`;

const Navbar = ({ data, clearSearch }) => {
  const notifications = data.articles ? data.articles.length : 0;
  return (
    <Wrapper>
      <NavList>
        <NavElement>
          <Link to={SEARCH} href> SEARCH </Link>
        </NavElement>
        <NavElement>
          <Link to={WISHLIST} onClick={clearSearch} href>
            WISHLIST
            <Badge notifications={notifications} />
          </Link>
        </NavElement>
      </NavList>
    </Wrapper>
  );
};

Navbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    articles: PropTypes.arrayOf(ArticleType),
    isLoading: PropTypes.bool,
    error: PropTypes.any,
  }).isRequired,
};

export default Navbar;
