
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const icons = {
  bin: 'M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z',
  heart: 'M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z',
  'heart-broken': 'M23.6 2c4.637 0 8.4 3.764 8.4 8.401 0 9.132-9.87 11.964-15.999 21.232-6.485-9.326-16.001-11.799-16.001-21.232 0-4.637 3.763-8.401 8.4-8.401 1.886 0 3.625 0.86 5.025 2.12l-2.425 3.88 7 4-4 10 11-12-7-4 1.934-2.901c1.107-0.68 2.35-1.099 3.665-1.099z',
};

const Svg = styled.svg`
  display: inline-block;
  stroke-width: 0;
  stroke: ${({ color, theme }) => color || theme.primary};
  fill: ${({ color, theme }) => color || theme.primary};
`;

export const Icon = ({ name, size, color }) => (
  <Svg color={color} width={`${size}px`} height={`${size}px`} viewBox="0 0 32 32">
    <path d={icons[name]} />
  </Svg>
);

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};
Icon.defaultProps = {
  name: 'heart',
  color: 'silver',
  size: 16,
};
