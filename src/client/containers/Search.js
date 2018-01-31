import { connect } from 'react-redux';

import { searchArticles } from '../actions';

import SearchComponent from '../components/Search';

const mapStateToProps = ({ search }) => {
  return {
    articles: search.data || [],
  };
};

const Search = connect(mapStateToProps, { searchArticles })(SearchComponent);

export default Search;

