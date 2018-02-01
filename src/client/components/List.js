import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArticleType from '../types/react/ArticleType';
import AddArticle from '../containers/AddArticle';
import RemoveArticle from '../containers/RemoveArticle';

import { SEARCH } from '../types/routes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  heigth: 100%;
  margin: 2.5em;
`;

const List = (props) => {
  return (
    <Wrapper>
      {props.articles.map((article, i) => {
        if (props.route === SEARCH) {
          return <AddArticle key={i} article={article} />;
        }
        return <RemoveArticle key={article.id} article={article} />;
      })}
    </Wrapper>
  );
};

List.propTypes = {
  route: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(ArticleType),
};
List.defaultProps = {
  articles: [],
};

export default List;
