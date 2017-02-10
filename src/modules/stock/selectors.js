import { createSelector } from 'reselect';
import moment from 'moment';

import { NAMESPACE } from './constants';

import { getLastPrintingDate } from '../barcodes/selectors';

import { buildName, buildLabel, buildId } from './helpers';

export const getItems = state => state[NAMESPACE].items;
export const getStatus = state => state[NAMESPACE].status;
export const getError = state => state[NAMESPACE].error;

// ui
export const getCreateFormData = state => state[NAMESPACE].ui.create.formData;
export const getRemoveCandidate = state => state[NAMESPACE].ui.removeCandidate;
export const getEditCandidate = state => state[NAMESPACE].ui.editCandidate;

// complex selectors
export const getCreateFormDataForValidation = createSelector(
  getCreateFormData,
  (formData) => {
    const ignoreList = ['id', 'label', 'image'];
    const renameList = {
      name: 'nombre del producto',
      quantity: 'cantidad',
      categories: 'categoría',
      salePrice: 'precio de venta',
      boughtPrice: 'precio de compra'
    };

    return Object.keys(formData)
      .filter(key => !ignoreList.includes(key))
      .reduce((res, key) => {
        res[renameList[key]] = formData[key];
        return res;
      }, {});
  }
);

export const getCreateFormDataWithFormat = createSelector(
  getItems,
  getCreateFormData,
  (items, formData) => {
    formData.name = buildName(formData.name);
    formData.id = buildId(formData.categories, items);
    formData.label = buildLabel(formData.name);
    return formData;
  }
);

export const getUnprintedItems = createSelector(
  getItems,
  getLastPrintingDate,
  (items, date) => {
    //* TODO: This will raise a bug when localStorage is cleaned up
    if (date === null) return items; // Has never printed before.

    return items
      .filter(item => {
        return moment(new Date(item.createdAt)).toDate().getTime() > date
      }); // Filter items that haven't been printed
  }
);
