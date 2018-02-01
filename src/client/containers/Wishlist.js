import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Wishlist from '../components/Wishlist';

const WishlistData = gql`
  query wishlist {
    articles: wishlist {
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

export default graphql(WishlistData)(Wishlist);
