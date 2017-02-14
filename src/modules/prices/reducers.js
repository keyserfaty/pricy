import { handleActions } from 'redux-actions';

import * as actions from './actions';
import * as helpers from './helpers';

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
  [actions.updatePrices.type]: (state, action) => ({
    ...state,
    list: helpers.generatePricesListBundle(state.list)
  }),

  [actions.onChangePrice.type]: (state, action) => {
    const list = [
      ...state.list,
    ];

    // Generate the prices with correct dues
    list[action.payload.id] = helpers.generatePricesList(action.payload.prices);

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
