// import categories from '../modules/categories';

import { fork } from 'redux-saga/effects';

function startSagas (...sagas) {
  return function * rootSaga () {
    yield sagas.map(saga => fork(saga));
  };
}

export default startSagas(
  // ...categories.sagas
);
