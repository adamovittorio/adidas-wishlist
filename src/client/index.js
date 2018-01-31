import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { SEARCH, WISHLIST } from './types/routes';

import store from './reducers/configure-store';

import Search from './containers/Search';
import Wishlist from './containers/Wishlist';

import Navbar from './components/Navbar';

const rootNode = document.getElementById('root');

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path={SEARCH} component={Search} />
          <Route exact path={WISHLIST} component={Wishlist} />
        </Fragment>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, rootNode);
