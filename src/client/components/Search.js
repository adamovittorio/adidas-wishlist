import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArticleType from '../types/react/ArticleType';

import Header from '../components/Header';
import List from '../components/List';

const Wrapper = styled.div`
display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Search = (props) => {
  return (
    <Wrapper>
      <Header
        title="Search on Adidas.com"
        search={props.searchArticles}
        clearSearch={props.clearSearch}
      />
      <List articles={props.articles} />
    </Wrapper>
  );
};

Search.propTypes = {
  match: PropTypes.any, // eslint-disable-line
  searchArticles: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(ArticleType),
};
Search.defaultProps = {
  articles: [],
};

export default Search;

