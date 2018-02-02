import _ from 'lodash';
import {
  ARTICLES_SEARCH_SUCCESS,
} from '../types/redux/search';


const generateId = () => {
  return Math.random().toString(36).substring(3);
};

// eslint-disable-next-line
export const search = store => next => action => {
  switch (action.type) {
    case ARTICLES_SEARCH_SUCCESS: {
      const transformedPayload = action.payload.map((article) => {
        const selecteFields = _.pick(article, ['suggestion', 'image', 'subTitle']);
        return {
          id: generateId(),
          ...selecteFields,
        };
      });
      return next({ ...action, payload: { ...transformedPayload } });
    }
    default:
      return next(action);
  }
};
