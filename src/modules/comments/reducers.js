import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  status: 'init',
  error: '',
  formData: {
    name: '',
    email: '',
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

  [actions.cleanForm.type]: (state, action) => ({
    ...state,
    formData: {
      name: '',
      email: '',
      text: ''
    }
  }),

  [actions.cleanState.type]: (state, action) => initialState

}, initialState);

export default reducer;
