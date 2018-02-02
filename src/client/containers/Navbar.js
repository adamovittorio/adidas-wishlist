import { graphql } from 'react-apollo';

import Navbar from '../components/Navbar';
import { WishlistQuery } from './Wishlist';

export default graphql(WishlistQuery)(Navbar);
