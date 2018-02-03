import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title, Icon } from './index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  heigth: 100%;
`;

const Message = styled.h3`
  margin: 0em;
  color: black;
`;

export const NotIdealState = ({ title, children }) => {
  return (
    <Wrapper>
      <Icon size="200" name="heart-broken" />
      <Title>{title}</Title>
      <Message>{children}</Message>
    </Wrapper>
  );
};

NotIdealState.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

NotIdealState.defaultProps = {
  title: 'Title',
};
