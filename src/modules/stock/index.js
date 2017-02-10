import create from './scenes/Create';
import list from './scenes/List';
import edit from './scenes/Edit';
import reducer from './reducers';

import sagas from './sagas';

import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export default {
  selectors,
  constants,
  actions,
  reducer,
  sagas: [
    ...sagas
  ],
  scenes: {
    list,
    create,
    edit
  }
};
