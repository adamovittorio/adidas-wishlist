import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArticleType from '../types/react/ArticleType';
import ArticleWithMutations from '../containers/ArticleWithMutations';
import { Subtitle } from '../components/Commons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  heigth: 100%;
  margin: 0em 2.5em 0em 2.5em;
`;

const List = ({ articles, wishlist }) => {
  return (
    <Wrapper>
      {articles.length !== 0 && articles.map(article =>
        <ArticleWithMutations key={article.id} article={article} wishlist={wishlist} />)}
      {articles.length === 0 &&
        <Subtitle> 0 results </Subtitle>
      }
    </Wrapper>
  );
};

List.propTypes = {
  articles: PropTypes.arrayOf(ArticleType).isRequired,
  wishlist: PropTypes.bool,
};
List.defaultProps = {
  wishlist: false,
};

export default List;
