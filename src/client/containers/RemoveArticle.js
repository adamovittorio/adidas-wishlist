import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import _ from 'lodash';

import Article from '../components/Article';
import { WishlistQuery } from './Wishlist';

const removeArticle = gql`
  mutation removeArticle($articleId: Int!){
    removedArticle: removeArticle(articleId: $articleId) {
      id
    }
  }
`;

export default graphql(removeArticle, {
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
})(Article);
