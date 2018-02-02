import { connect } from 'react-redux';

import client from '../client';
import { searchArticles, clearSearch } from '../actions';

import SearchComponent from '../components/Search';
import { WishlistQuery } from './Wishlist';

// fetch wishilist for mutations update
client.query({ query: WishlistQuery });

const mapStateToProps = ({ search }) => {
  return {
    articles: search.data || [],
  };
};

const Search = connect(mapStateToProps, { searchArticles, clearSearch })(SearchComponent);

export default Search;

