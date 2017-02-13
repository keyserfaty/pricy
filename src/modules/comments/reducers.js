import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  status: 'init',
  error: '',
  formData: {
    text: ''
  },
  ui: {}
};

const reducer = handleActions({
  [actions.onChange.type]: (state, action) => ({
    ...state,
    formData: {
      ...state.formData,
      [action.payload.label]: action.payload.value
    }
  }),

  [actions.create.START]: (state, action) => ({
    ...state,
    status: 'pending'
  }),

  [actions.create.SUCCESS]: (state, action) => ({
    ...state,
    status: 'success'
  }),

  [actions.create.FAILURE]: (state, action) => ({
    ...state,
    status: 'failure',
    error: action.payload.error
  }),

  [actions.cleanState.type]: (state, action) => ({
    ...state,
    ui: {
      interest: {}
    }
  })

}, initialState);

export default reducer;
