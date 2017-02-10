import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  status: 'init',
  error: '',
  prices: [
    {

    }
  ],
  ui: {}
};

const reducer = handleActions({
  [actions.cleanState.type]: (state, action) =>
    initialState

}, initialState);

export default reducer;
