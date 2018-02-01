import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Article from '../components/Article';

const removeArticle = gql`
  mutation removeArticle($articleId: Int!){
    removedArticle: removeArticle(articleId: $articleId) {
      id
    }
  }
`;

export default graphql(removeArticle, {
  props: ({ mutate }) => ({
    removeArticle: articleId => mutate({ variables: { articleId } }),
  }),
})(Article);
