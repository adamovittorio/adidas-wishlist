import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArticleType from '../types/react/ArticleType';
import ArticleWithMutations from '../containers/ArticleWithMutations';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  heigth: 100%;
  margin: 2.5em;
`;

const List = ({ articles, wishlist }) => {
  return (
    <Wrapper>
      {articles.map(article =>
        <ArticleWithMutations key={article.id} article={article} wishlist={wishlist} />)}
    </Wrapper>
  );
};

List.propTypes = {
  articles: PropTypes.arrayOf(ArticleType),
  wishlist: PropTypes.bool,
};
List.defaultProps = {
  articles: [],
  wishlist: false,
};

export default List;
