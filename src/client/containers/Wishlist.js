import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Wishlist from '../components/Wishlist';

export const WishlistQuery = gql`
  query wishlist {
    articles: wishlist {
      id
      suggestion
      subTitle
      image
    }
  }
`;

export default graphql(WishlistQuery)(Wishlist);
