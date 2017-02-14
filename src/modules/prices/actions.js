import makeActionCreator from 'make-action-creator';

import { NAMESPACE } from './constants';

//* ui
export const onChangePrice = makeActionCreator(NAMESPACE + '/onChangePrice');
export const addPrice = makeActionCreator(NAMESPACE + '/addPrice');
export const removePrice = makeActionCreator(NAMESPACE + '/removePrice');
export const updatePrices = makeActionCreator(NAMESPACE + '/updatePrices');

export const cleanState = makeActionCreator(NAMESPACE + '/cleanState');
