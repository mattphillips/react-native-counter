import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './src/containers/App';
import reducers from './src/reducers';

const store = createStore(reducers);

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Redux;
