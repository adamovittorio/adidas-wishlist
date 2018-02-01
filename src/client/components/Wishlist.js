import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ArticleType from '../types/react/ArticleType';

import Header from '../components/Header';
import List from '../components/List';

const Wishlist = (props) => {
  return (
    <Fragment>
      <Header
        title="Wishlist on Adidas.com"
      />
      <List articles={props.data.articles} route={props.match.path} />
    </Fragment>
  );
};

Wishlist.propTypes = {
  match: PropTypes.any, // eslint-disable-line
  data: PropTypes.shape({
    articles: PropTypes.arrayOf(ArticleType),
    isLoading: PropTypes.bool,
    error: PropTypes.any,
  }).isRequired,
};
Wishlist.defaultProps = {};

export default Wishlist;

