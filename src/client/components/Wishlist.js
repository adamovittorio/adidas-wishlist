import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { SEARCH } from '../types/routes';
import ArticleType from '../types/react/ArticleType';

import Header from '../components/Header';
import List from '../components/List';
import { NotIdealState, Link } from './Commons';

const Body = ({ articles }) => {
  if (articles.length !== 0) {
    return <List articles={articles} wishlist />;
  }
  return (
    <NotIdealState title="Oh no your wishlist it's empty!">
      <Link color="black" to={SEARCH} href>
        Search something and click on it to add to your wishlist!
      </Link>
    </NotIdealState>
  );
};

Body.propTypes = {
  articles: PropTypes.arrayOf(ArticleType),
};

Body.defaultProps = {
  articles: [],
};

const Wishlist = ({ data: { articles } }) => {
  return (
    <Fragment>
      <Header title="Wishlist on Adidas.com" />
      <Body articles={articles} />
    </Fragment>
  );
};

Wishlist.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.arrayOf(ArticleType),
    isLoading: PropTypes.bool,
    error: PropTypes.any,
  }).isRequired,
};

Wishlist.defaultProps = {};

export default Wishlist;
