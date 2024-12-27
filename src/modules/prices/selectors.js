import { createSelector } from 'reselect';
import { getInstalments, getCashDiscount } from '../config/selectors';
import { generatePrices, generatePricesForPrint, generateCashDiscountPrice } from './helpers';

export const getList = state => state.prices.list;
export const getStatus = state => state.prices.status;
export const getError = state => state.prices.error;

export const getListWithInterestPrices = createSelector(
  getList,
  getInstalments,
  getCashDiscount,
  (list, instalments, cashDiscount) => {
    return list.reduce((res, elem) => {
      const basePrice = elem.prices[0].price;
      const each = {
        prices: [
          {
            instalments: 0,
            price: basePrice
          },
          {
            instalments: -1, // Special flag for cash discount
            price: generateCashDiscountPrice(cashDiscount)(basePrice)
          },
          ...generatePrices(instalments)(basePrice)
        ]
      };

      res.push(each);
      return res;
    }, []);
  }
);

export const getListForPrint = createSelector(
  getList,
  getInstalments,
  getCashDiscount,
  (list, instalments, cashDiscount) => {
    return list.reduce((res, elem) => {
      const basePrice = elem.prices[0].price;
      const each = {
        prices: [
          {
            instalments: 0,
            price: basePrice
          },
          {
            instalments: -1,
            price: generateCashDiscountPrice(cashDiscount)(basePrice),
            cashDiscount
          },
          ...generatePricesForPrint(instalments)(basePrice)
        ]
      };

      res.push(each);
      return res;
    }, []);
  }
);
