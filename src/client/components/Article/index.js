import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import ArticleType from '../../types/react/ArticleType';

import { Suggestion, Subtitle, Icon } from '../Commons';
import Card from './Card';
import Image from './Image';

const Float = styled.div`
  float: right;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1000;
`;

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }
  onClick = () => {
    const {
      addArticle,
      removeArticle,
      article,
      wishlist,
    } = this.props;

    const { selected } = this.state;

    if (!selected && !wishlist) {
      addArticle(_.omit(article, '__typename'));
      this.setState({ selected: true });
    } else {
      removeArticle(article.id);
      this.setState({ selected: false });
    }
  }
  render() {
    const { selected } = this.state;
    const { article, wishlist } = this.props;

    const color = selected ? 'crimson' : 'silver';

    return (
      <Card onClick={this.onClick}>
        <Float>
          <Icon
            size={24}
            name={!wishlist ? 'heart' : 'bin'}
            color={wishlist ? 'silver' : color}
          />
        </Float>
        <Image src={`${article.image.split('?')[0]}?sw=240&sh=240&sm=fit`} />
        <Suggestion>{article.suggestion}</Suggestion>
        <Subtitle>{article.subTitle}</Subtitle>
      </Card>
    );
  }
}

Article.propTypes = {
  article: ArticleType.isRequired,
  addArticle: PropTypes.func,
  removeArticle: PropTypes.func,
  wishlist: PropTypes.bool,
};

Article.defaultProps = {
  addArticle: null,
  removeArticle: null,
  wishlist: false,
};

export default Article;
