import React from 'react';
import PropTypes from 'prop-types';

import ArticleType from '../types/react/ArticleType';

const List = (props) => {
  return props.articles.map((article) => {
    return (
      <div>{article.suggestion}</div>
    );
  });
};

List.propTypes = {
  articles: PropTypes.arrayOf(ArticleType),
};
List.defaultProps = {
  articles: [],
};

export default List;
