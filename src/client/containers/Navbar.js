import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import { clearSearch } from '../actions';

import Navbar from '../components/Navbar';
import { WishlistQuery } from './Wishlist';

export default connect(null, { clearSearch })(graphql(WishlistQuery)(Navbar));
