import { createSelector } from 'reselect';

import { NAMESPACE } from './constants';

export const getItems = state => state[NAMESPACE].items;
export const getStatus = state => state[NAMESPACE].status;
export const getError = state => state[NAMESPACE].error;
