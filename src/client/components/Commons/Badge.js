import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 50%;
  width: 23px;
  heigth: 23px;
  border: 0.5px solid white;
  display: ${({ notifications }) => {
    return notifications ? 'flex' : 'none';
  }};
  justify-content: center;
  align-items: center;
  background-color: crimson;
  font-size: 12px;
  margin: 0px 10px;
`;

export const Badge = ({ notifications }) => {
  return (
    <Wrapper notifications={notifications}>
      {notifications}
    </Wrapper>
  );
};

Badge.propTypes = {
  notifications: PropTypes.number,
};

Badge.defaultProps = {
  notifications: null,
};
