import makeActionCreator from 'make-action-creator';

import { NAMESPACE } from './constants';

export const onMount = makeActionCreator(NAMESPACE + '/onMount');

//* ui
export const saveChanges = makeActionCreator(NAMESPACE + '/saveChanges');
export const onChangeInterest = makeActionCreator(NAMESPACE + '/onChangeInterest');
export const onChangeCashDiscount = makeActionCreator(NAMESPACE + '/onChangeCashDiscount');
export const cleanState = makeActionCreator(NAMESPACE + '/cleanState');
