import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { SEARCH, WISHLIST } from '../types/routes';

const Wrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.primary};
  height: 40px;
  display: flex;
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

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    color: rebeccapurple;
  }
`;


const Navbar = () => {
  return (
    <Wrapper>
      <NavList>
        <NavElement>
          <StyledLink to={SEARCH} href> Search </StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to={WISHLIST} href> Wishlist </StyledLink>
        </NavElement>
      </NavList>
    </Wrapper>
  );
};

export default Navbar;
