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
      />
      <List articles={props.articles} route={props.match.path} />
    </Fragment>
  );
};

Search.propTypes = {
  match: PropTypes.any, // eslint-disable-line
  searchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(ArticleType),
};
Search.defaultProps = {
  articles: [],
};

export default Search;

