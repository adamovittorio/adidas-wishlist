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
  module.hot.accept();
}

export default store;
