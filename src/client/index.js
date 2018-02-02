import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Apollo
import client from './client';

// Redux
import store from './reducers/configure-store';

// Containers
import Search from './containers/Search';
import Wishlist from './containers/Wishlist';
import Navbar from './containers/Navbar';

// types and constants
import { SEARCH, WISHLIST } from './types/routes';
import theme, { globalStyle } from './types/theme'; // eslint-disable-line

const rootNode = document.getElementById('root');

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Fragment>
              <Navbar />
              <Route exact path={SEARCH} component={Search} />
              <Route exact path={WISHLIST} component={Wishlist} />
            </Fragment>
          </Router>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, rootNode);
