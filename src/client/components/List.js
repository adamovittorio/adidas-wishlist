import React from 'react';
import PropTypes from 'prop-types';

import ArticleType from '../types/react/ArticleType';

const List = (props) => {
  return props.articles.map((article, i) => {
    return (
      <div key={i}>
        {article.suggestion}
      </div>
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
