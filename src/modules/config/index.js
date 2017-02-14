import edit from './scenes/Edit';
import reducer from './reducers';

import * as selectors from './selectors';
import * as constants from './constants';
import * as actions from './actions';

export default {
  constants,
  selectors,
  actions,
  reducer,
  scenes: {
    edit
  }
};
