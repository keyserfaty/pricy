import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  status: 'init',
  error: '',
  interest: {
    due3: 10,
    due12: 20
  },
  ui: {
    interest: {}
  }
};

const reducer = handleActions({
  [actions.onChangeInterest.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      interest: {
        ...state.ui.interest,
        [action.payload.due]: Number(action.payload.value)
      }
    }
  }),

  [actions.onMount.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      interest: state.interest
    }
  }),

  [actions.saveChanges.type]: (state, action) => ({
    ...state,
    interest: state.ui.interest
  }),

  [actions.cleanState.type]: (state, action) => ({
    ...state,
    ui: {
      interest: {}
    }
  })

}, initialState);

export default reducer;
