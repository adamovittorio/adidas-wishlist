import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Redux
import store from './reducers/configure-store';

// Containers
import Search from './containers/Search';
import Wishlist from './containers/Wishlist';

// Components
import Navbar from './components/Navbar';

// types and constants
import { SEARCH, WISHLIST } from './types/routes';
import theme, { globalStyle } from './types/theme';

const rootNode = document.getElementById('root');

const App = () => {
  return (
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
  );
};

ReactDOM.render(<App />, rootNode);
