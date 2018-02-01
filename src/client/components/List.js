import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArticleType from '../types/react/ArticleType';
import ArticleWithMutation from '../containers/ArticleWithMutation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  heigth: 100%;
  margin: 2.5em;
`;

const List = (props) => {
  return (
    <Wrapper>
      {props.articles.map((article, i) =>
        <ArticleWithMutation key={i} article={article} />)
      }
    </Wrapper>
  );
};

List.propTypes = {
  articles: PropTypes.arrayOf(ArticleType),
};
List.defaultProps = {
  articles: [],
};

export default List;
