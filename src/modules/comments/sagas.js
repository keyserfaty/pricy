import { call, put, select, takeEvery } from 'redux-saga/effects';

import { post } from '../../utils/api';

import * as actions from './actions';
import * as selectors from './selectors';

export function * createWorker () {
  yield put(actions.create.start());
  const formData = yield select(selectors.getFormDataWithTimestamp);

  //* CRUD action
  const { error } = yield call(post, 'comments.json', formData);

  if (error) {
    return yield put(actions.create.failure({ error }));
  }

  yield put(actions.create.success());
  yield put(actions.cleanForm());
}

export function * createWatcher () {
  yield takeEvery(actions.create.type, createWorker);
}

export default [
  createWatcher
];
