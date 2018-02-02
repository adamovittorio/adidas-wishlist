import search from '../reducers/search';
import {
  ARTICLES_SEARCH_START,
  ARTICLES_SEARCH_SUCCESS,
  ARTICLES_SEARCH_ERROR,
  ARTICLES_SEARCH_CLEAR,
} from '../types/redux/search';

const initialState = {
  isFetching: false,
  error: null,
  data: [],
};

describe('search Reducer', () => {
  it('handles action with unknow type', () => {
    const action = {
      type: 'UNKNOW',
    };
    expect(search(initialState, action)).toBe(initialState);
  });

  it('ARTICLES_SEARCH_START', () => {
    const action = { type: ARTICLES_SEARCH_START };
    const stateAfter = { isFetching: true, error: null, data: [] };
    expect(search(initialState, action)).toEqual(stateAfter);
  });

  it('ARTICLES_SEARCH_ERROR', () => {
    const action = { type: ARTICLES_SEARCH_ERROR, error: 'Generic Error' };
    const stateAfter = { isFetching: false, error: 'Generic Error', data: [] };
    expect(search(initialState, action)).toEqual(stateAfter);
  });

  it('ARTICLES_SEARCH_SUCCESS', () => {
    const action = {
      type: ARTICLES_SEARCH_SUCCESS,
      payload: [
        {
          id: 'ooo',
          suggestion: 'Ultraboost',
          image: 'image',
          subTitle: 'sub-title',
        },
      ],
    };
    const stateAfter = {
      isFetching: false,
      error: null,
      data: [
        {
          id: 'ooo',
          suggestion: 'Ultraboost',
          image: 'image',
          subTitle: 'sub-title',
        },
      ],
    };
    expect(search(initialState, action)).toEqual(stateAfter);
  });

  it('ARTICLES_SEARCH_CLEAR', () => {
    const stateBefore = { isFetching: false, error: null, data: [{ suggestion: 'Ultraboost' }, { suggestion: 'Ultraboost2' }] };
    const action = { type: ARTICLES_SEARCH_CLEAR };
    expect(search(stateBefore, action)).toEqual(initialState);
  });
});
