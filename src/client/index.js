import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
        <Switch>
          <Navbar />
          <Route exact path={SEARCH} component={Search} />
          <Route exact path={WISHLIST} component={Wishlist} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, rootNode);
