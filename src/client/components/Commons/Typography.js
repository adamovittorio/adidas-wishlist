import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
  margin: 0.5em;
`;

export const Suggestion = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-weight: 100;
  margin: 0.2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  margin: 0.2em;
`;
