import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
  props: ({ mutate }) => ({
    addArticle: article => mutate({ variables: { article } }),
  }),
})(Article);
