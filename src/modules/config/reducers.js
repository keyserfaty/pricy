import { handleActions } from 'redux-actions';

import * as actions from './actions';

const pricesInitialState = {
  price: 0,
  priceCard: 0,
  priceCardInterest: 0
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
      ...state.list
    ];

    list[action.payload.id] = {
      price: Number(action.payload.price),
      priceCard: Math.round(Number(action.payload.price) * 1.1 * 100) / 100,
      priceCardInterest: Math.round(Number(action.payload.price) * 1.2 * 100) / 100
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
