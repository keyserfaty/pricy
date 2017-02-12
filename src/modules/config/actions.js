import makeActionCreator from 'make-action-creator';

import { NAMESPACE } from './constants';

//* ui
export const onChangeInterest = makeActionCreator(NAMESPACE + '/onChangeInterest');

export const cleanState = makeActionCreator(NAMESPACE + '/cleanState');
