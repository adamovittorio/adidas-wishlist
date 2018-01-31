import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './reducers/configure-store';

const rootNode = document.getElementById('root');

const App = () => {
  return (
    <Provider store={store}>
      <div>Test</div>
    </Provider>
  );
};

ReactDOM.render(<App />, rootNode);
