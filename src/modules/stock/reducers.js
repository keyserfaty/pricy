/* @flow */

import { handleActions } from 'redux-actions';

import * as actions from './actions';
import type { State } from './models';

const initialUiCreateFormData = {
  id: '',
  label: '',
  name: '',
  quantity: '',
  image: '',
  categories: '',
  salePrice: '',
  boughtPrice: ''
};

const initialState: State = {
  status: 'init',
  error: '',
  items: [],
  ui: {
    removeCandidate: '',
    editCandidate: '',
    create: {
      formData: initialUiCreateFormData
    }
  }
};

const reducer = handleActions({
  [actions.fetchAll.START]: (state, action) => ({
    ...state,
    status: 'pending',
  }),

  [actions.fetchAll.FAILURE]: (state, action) => ({
    ...state,
    status: 'failure',
    error: action.payload.error
  }),

  [actions.fetchAll.SUCCESS]: (state, action) => ({
    ...state,
    status: 'success',
    items: action.payload.items
  }),

  [actions.create.START]: (state, action) => ({
    ...state,
    status: 'pending',
  }),

  [actions.create.FAILURE]: (state, action) => ({
    ...state,
    status: 'failure',
    error: action.payload.error
  }),

  [actions.create.SUCCESS]: (state, action) => ({
    ...state,
    status: 'success',
    items: [
      ...state.items,
      ...action.payload.product
    ]
  }),

  [actions.remove.START]: (state, action) => ({
    ...state,
    status: 'pending',
  }),

  [actions.remove.FAILURE]: (state, action) => ({
    ...state,
    status: 'failure',
    error: action.payload.error
  }),

  [actions.remove.SUCCESS]: (state, action) => ({
    ...state,
    status: 'success',
    items: [
      ...state.items
        .filter(e => e._id !== action.payload.product)
    ],
    ui: {
      ...state.ui,
      removeCandidate: ''
    }
  }),

  [actions.onChange.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      create: {
        ...state.ui.create,
        formData: {
          ...state.ui.create.formData,
          ...action.payload
        }
      }
    }
  }),

  [actions.onRemoveCandidate.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      removeCandidate: action.payload.id
    }
  }),

  [actions.onEditCandidate.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      editCandidate: action.payload.id
    }
  }),

  [actions.onImage.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      create: {
        ...state.ui.create,
        formData: {
          ...state.ui.create.formData,
          image: action.payload.file
        }
      }
    }
  }),

  [actions.onRemoveImage.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      create: {
        ...state.ui.create,
        formData: {
          ...state.ui.create.formData,
          image: ''
        }
      }
    }
  }),

  [actions.cleanForm.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      create: {
        ...state.ui.create,
        formData: initialUiCreateFormData
      }
    }
  }),

  [actions.closeAlertBox.type]: (state, action) => ({
    ...state,
    status: 'init',
    error: null
  }),

  [actions.cleanState.type]: (state, action) =>
    initialState

}, initialState);

export default reducer;
