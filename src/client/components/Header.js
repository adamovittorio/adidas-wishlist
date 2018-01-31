import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  margin: 0.5em;
`;

const Input = styled.input`
  height: 25px;
  font-size: 20px;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 3px;
  &:focus {
    outline: none;
  }
`;


const Header = (props) => {
  return (
    <Wrapper>
      <Title> {props.title} </Title>
      {props.title === 'Search' &&
        <Input />
      }
    </Wrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: 'Header',
};

export default Header;
