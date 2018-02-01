import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { WishlistQuery } from './Wishlist';

import Article from '../components/Article';

const addArticle = gql`
  mutation addArticle($article: InputArticle!) {
    addedArticle: addArticle(article: $article) {
      id
      suggestion
      subTitle
      image
      url
      rating
      reviews
      separatedSalePrice
      separatedStandartPrice
      subTitle
      isPreorder
    }
  }
`;

export default graphql(addArticle, {
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
})(Article);
