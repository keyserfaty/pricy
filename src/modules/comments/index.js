import edit from './scenes/Edit';
import reducer from './reducers';

import * as constants from './constants';
import * as actions from './actions';

export default {
  constants,
  actions,
  reducer,
  scenes: {
    edit
  }
};
