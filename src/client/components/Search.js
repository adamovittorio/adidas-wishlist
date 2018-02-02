import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ArticleType from '../types/react/ArticleType';

import Header from '../components/Header';
import List from '../components/List';

const Search = (props) => {
  return (
    <Fragment>
      <Header
        title="Search on Adidas.com"
        search={props.searchArticles}
        clearSearch={props.clearSearch}
      />
      <List articles={props.articles} />
    </Fragment>
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

