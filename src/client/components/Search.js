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
  height: 100%;
`;

const Search = (props) => {
  return (
    <Wrapper>
      <Header
        search={props.searchArticles}
        clearSearch={props.clearSearch}
      />
      {props.articles &&
        <List articles={props.articles} />
      }
    </Wrapper>
  );
};

Search.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  searchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(ArticleType),
};
Search.defaultProps = {
  articles: null,
};

export default Search;

