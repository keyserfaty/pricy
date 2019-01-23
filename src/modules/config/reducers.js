import { handleActions } from 'redux-actions';
import * as actions from './actions';

const initialState = {
  status: 'init',
  error: '',
  instalments: [
    {
      quantity: 3,
      interest: 10
    },
    {
      quantity: 6,
      interest: 12
    },
    {
      quantity: 12,
      interest: 20
    }
  ],
  ui: {
    instalments: []
  }
};

const reducer = handleActions({
  [actions.onChangeInterest.type]: (state, action) => {
    const instalments = [
      ...state.instalments,
    ];

    // Generate the instalments object with updated interest rate
    instalments[action.payload.id] = {
      ...state.instalments[action.payload.id],
      interest: Number(action.payload.interest)
    };

    return {
      ...state,
      ui: {
        ...state.ui,
        instalments: instalments
      }
    }
  },

  [actions.onMount.type]: (state, action) => ({
    ...state,
    ui: {
      ...state.ui,
      instalments: state.instalments
    }
  }),

  [actions.saveChanges.type]: (state, action) => ({
    ...state,
    instalments: state.ui.instalments
  }),

  [actions.cleanState.type]: (state, action) => ({
    ...state,
    ui: {
      instalments: []
    }
  })

}, initialState);

export default reducer;
