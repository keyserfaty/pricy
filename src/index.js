import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './app/configureStore';
import './index.css';

//* Libs
import 'animate.css/animate.css';

import RootComponent from './app/Root';

const store = configureStore();

ReactDOM.render(
  <RootComponent store={store} history={syncHistoryWithStore(browserHistory, store)} />,
  document.getElementById('root')
);
