import { routerReducer as routing } from 'react-router-redux';
import { reducer as asyncReducer } from 'make-action-creator/dist/reducer';
import { combineReducers } from 'redux';

import prices from '../modules/prices';
import config from '../modules/config';
import comments from '../modules/comments';

const appReducer = combineReducers({
  routing,
  async: asyncReducer,
  [prices.constants.NAMESPACE]: prices.reducer,
  [config.constants.NAMESPACE]: config.reducer,
  [comments.constants.NAMESPACE]: comments.reducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
