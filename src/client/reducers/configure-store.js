import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// Reducers
import rootReducer from './index';

// Middlewares
// import {} from '../middlewares';


const enhancer = composeWithDevTools(applyMiddleware(ReduxThunk));

const store = createStore(rootReducer, enhancer);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept();
  module.hot.accept('./index', () => {
    const nextRootReducer = require('./index'); // eslint-disable-line
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
