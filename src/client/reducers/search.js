import {
  ARTICLES_SEARCH_START,
  ARTICLES_SEARCH_SUCCESS,
  ARTICLES_SEARCH_ERROR,
  ARTICLES_SEARCH_CLEAR,
} from '../types/redux/search';

export const initialState = {
  isFetching: false,
  error: null,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_SEARCH_CLEAR:
      return { ...initialState };
    case ARTICLES_SEARCH_START:
      return { ...state, isFetching: true };
    case ARTICLES_SEARCH_ERROR: {
      const { error } = action;
      return { ...initialState, error };
    }
    case ARTICLES_SEARCH_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: null,
        data: [ // TODO normalize
          ...action.payload,
        ],
      };
    }
    default:
      return state;
  }
};
