import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configure (initialState) {
  const create = typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;

  const sagaMiddleware = createSagaMiddleware();

  let reduxMiddleware = [
    routerMiddleware(browserHistory),
    sagaMiddleware
  ];

  // Only includes in DEV mode
  // if (__DEV__) {
  //   const freeze = require('redux-freeze');
  //   reduxMiddleware.push(freeze);
  // }

  const createStoreWithMiddleware = applyMiddleware(...reduxMiddleware)(create);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      console.log(require('./reducers'));
      store.replaceReducer(require('./reducers'));
    });
  }

  return store;
}
