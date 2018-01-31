import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ArticleType from '../types/react/ArticleType';

import Header from '../components/Header';
import List from '../components/List';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.articles !== nextProps.articles) {
      this.setState({
        articles: nextProps.articles,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Header
          title="Search"
          search={this.props.searchArticles}
        />
        <List articles={this.state.articles} />
      </Fragment>
    );
  }
}

Search.propTypes = {
  searchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(ArticleType),
};
Search.defaultProps = {
  articles: [],
};

export default Search;

