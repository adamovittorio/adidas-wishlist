import { graphql, compose } from 'react-apollo';
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

const removeArticle = gql`
  mutation removeArticle($articleId: String!){
    removedArticle: removeArticle(articleId: $articleId) {
      id
    }
  }
`;

export default compose(
  graphql(addArticle, { name: 'addArticle' }),
  graphql(removeArticle, { name: 'removeArticle' }),
)(Article);
