import comments from '../modules/comments';

import { fork } from 'redux-saga/effects';

function startSagas (...sagas) {
  return function * rootSaga () {
    yield sagas.map(saga => fork(saga));
  };
}

export default startSagas(
  ...comments.sagas
);
