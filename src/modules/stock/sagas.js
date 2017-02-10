import { call, put, select, takeEvery } from 'redux-saga/effects';

import { get, post, del } from '../../utils/api';
import { validator } from '../../utils/validator';

import * as actions from './actions';
import * as selectors from './selectors';

export function * fetchAllWorker () {
  yield put(actions.fetchAll.start());

  //* TODO: add a `race` condition to see if action timeouts
  const { res: items, error } = yield call(get, 'products');

  if (error) {
    return put(actions.fetchAll.failure({ error: error }));
  }

  yield put(actions.fetchAll.success({ items }));
}

export function * createWorker () {
  yield put(actions.create.start());
  const formData = yield select(selectors.getCreateFormDataForValidation);

  //* Validations
  const { error: validationError } = yield call(validator, ['not-empty'], formData);
  if (validationError) {
    return yield put(actions.create.failure({ error: validationError }));
  }

  //* CRUD action
  const product = yield select(selectors.getCreateFormDataWithFormat);
  const { res, error } = yield call(post, 'products', product);

  if (error) { //* TODO: error messages should come from the api
    return yield put(actions.create.failure({ error }));
  }

  yield put(actions.create.success({ product: res }));
  yield put(actions.cleanForm());
}

export function * removeWorker () {
  yield put(actions.remove.start());

  const removeCandidate = yield select(selectors.getRemoveCandidate);
  const { error } = yield call(del, 'products', removeCandidate);

  if (error) {
    return yield put(actions.remove.failure({ error }));
  }

  yield put(actions.remove.success({ product: removeCandidate }));
}

export function * fetchAllWatcher () {
  yield takeEvery(actions.fetchAll.type, fetchAllWorker);
}

export function * createWatcher () {
  yield takeEvery(actions.create.type, createWorker);
}

export function * removeWatcher () {
  yield takeEvery(actions.remove.type, removeWorker);
}

export default [
  fetchAllWatcher,
  createWatcher,
  removeWatcher
];
