import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
      <Link hover="black" color="silver" to={SEARCH} href>
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

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Wishlist = ({ data: { articles = [] } }) => {
  return (
    <Wrapper>
      {articles.length !== 0 && <Header />}
      <Body articles={articles} />
    </Wrapper>
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
