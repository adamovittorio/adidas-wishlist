import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

import { WishlistQuery } from './Wishlist';

import Article from '../components/Article';

const addArticle = gql`
  mutation addArticle($article: InputArticle!) {
    addedArticle: addArticle(article: $article) {
      id
      suggestion
      subTitle
      image
    }
  }
`;

const removeArticle = gql`
  mutation removeArticle($articleId: String!){
    removedArticle: removeArticle(articleId: $articleId) {
      id
    }
  }
`;

export default compose(
  graphql(addArticle, {
    options: {
      update: (proxy, { data: { addedArticle } }) => {
        // update cache
        const data = proxy.readQuery({ query: WishlistQuery });
        data.articles.push(addedArticle);
        proxy.writeQuery({ query: WishlistQuery, data });
      },
    },
    props: ({ mutate }) => ({
      addArticle: article => mutate({ variables: { article } }),
    }),
  }),
  graphql(removeArticle, {
    options: {
      update: (proxy, { data: { removedArticle } }) => {
        // update cache
        const data = proxy.readQuery({ query: WishlistQuery });
        _.remove(data.articles, ({ id }) => id === removedArticle.id);
        proxy.writeQuery({ query: WishlistQuery, data });
      },
    },
    props: ({ mutate }) => ({
      removeArticle: articleId => mutate({ variables: { articleId } }),
    }),
  }),
)(Article);
