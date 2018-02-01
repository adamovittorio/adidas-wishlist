import { connect } from 'react-redux';

import { searchArticles, clearSearch } from '../actions';

import SearchComponent from '../components/Search';

const mapStateToProps = ({ search }) => {
  return {
    articles: search.data || [],
  };
};

const Search = connect(mapStateToProps, { searchArticles, clearSearch })(SearchComponent);

export default Search;

