import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  status: 'init',
  error: '',
  interest: {
    due3: 10,
    due12: 20
  }
};

const reducer = handleActions({
  [actions.onChangeInterest.type]: (state, action) => ({
    ...state,
    interest: {
      ...state.interest,
      [action.payload.due]: Number(action.payload.value)
    }
  }),

  [actions.cleanState.type]: (state, action) =>
    initialState

}, initialState);

export default reducer;
