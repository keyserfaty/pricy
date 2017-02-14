import { createSelector } from 'reselect';
import { getInstalments } from '../config/selectors';

export const getList = state => state.prices.list;
export const getStatus = state => state.prices.status;
export const getError = state => state.prices.error;



export const getListWithInterestPrices = createSelector(
  getList,
  getInstalments,
  (prices, instalments) => {

  }
);
