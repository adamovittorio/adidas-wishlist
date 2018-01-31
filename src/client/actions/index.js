import {
  ARTICLES_SEARCH_START,
  ARTICLES_SEARCH_SUCCESS,
  ARTICLES_SEARCH_ERROR,
} from '../types/redux/search';

import { ADIDAS_API_URL } from '../types/constants';

export const searchArticles = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: ARTICLES_SEARCH_START });
    fetch(`${ADIDAS_API_URL}${searchTerm}`) // Only modern-browser TODO add polyfills
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('search failed!');
      })
      .then(({ products }) => dispatch({ type: ARTICLES_SEARCH_SUCCESS, payload: products }))
      .catch(err => dispatch({ type: ARTICLES_SEARCH_ERROR, error: err }));
  };
};
