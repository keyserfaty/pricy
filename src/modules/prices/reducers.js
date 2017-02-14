import { handleActions } from 'redux-actions';

import * as actions from './actions';

const pricesInitialState = {
  instalments: 0, // This allows future support for custom prices per instalment
  price: null
};

const initialState = {
  status: 'init',
  error: '',
  list: [pricesInitialState],
  ui: {}
};

const reducer = handleActions({
  [actions.onChangePrice.type]: (state, action) => {
    const list = [
      ...state.list,
    ];

    // Update price in list
    list[action.payload.id] = {
      ...state.list[action.payload.id],
      price: Number(action.payload.price)
    };

    return {
      ...state,
      list
    };
  },

  [actions.addPrice.type]: (state, action) => ({
    ...state,
    list: [
      ...state.list,
      pricesInitialState
    ]
  }),

  [actions.removePrice.type]: (state, action) => ({
    ...state,
    list: [
      ...state.list
        .filter((price, i) => i !== action.payload.id)
    ]
  }),

  [actions.cleanState.type]: (state, action) =>
    initialState

}, initialState);

export default reducer;
