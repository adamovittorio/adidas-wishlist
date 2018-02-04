import { Link as L } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(L)`
  color: ${({ theme, color }) => color ? color : theme.text};
  text-decoration: none;
  font-size: 20px;
  display: flex;

  flex-direction: row;
  justify-content: space-between;

  &:hover {
    color: ${({ theme, hover }) => hover ? hover : theme.secondary};
  }
`;
