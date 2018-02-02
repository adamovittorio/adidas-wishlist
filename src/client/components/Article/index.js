import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    const { addArticle, removeArticle, article } = this.props;
    const { selected } = this.state;
    if (!selected && addArticle) {
      addArticle(article);
      this.setState({ selected: true });
    } else {
      removeArticle(article.id);
    }
  }
  render() {
    const { selected } = this.state;
    const { article } = this.props;

    const imageUrl = `${article.image.split('?')[0]}?sw=240&sh=240&sm=fit`;
    const color = selected ? 'crimson' : 'silver';
    const name = this.props.addArticle ? 'heart' : 'bin';

    return (
      <Card onClick={this.onClick}>
        <Float><Icon name={name} size={24} color={color} /></Float>
        <Image src={imageUrl} />
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
};

Article.defaultProps = {
  addArticle: null,
  removeArticle: null,
};

export default Article;
