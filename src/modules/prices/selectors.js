import { createSelector } from 'reselect';
import { getInstalments } from '../config/selectors';
import { generatePrices } from './helpers';

export const getList = state => state.prices.list;
export const getStatus = state => state.prices.status;
export const getError = state => state.prices.error;

export const getListWithInterestPrices = createSelector(
  getList,
  getInstalments,
  (list, instalments) => {
    return list.reduce((res, elem) => {
      const each = {
        prices: [
          ...elem.prices,
          ...generatePrices(instalments)(elem.prices[0].price)
        ]
      };

      res.push(each);
      return res;
    }, []);
  }
);
