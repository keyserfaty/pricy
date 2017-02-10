import makeActionCreator from 'make-action-creator';

import { NAMESPACE } from './constants';

export const create = makeActionCreator(NAMESPACE + '/create', {rrSpinner: true});

//* ui
export const onChange = makeActionCreator(NAMESPACE + '/onChange');

export const cleanState = makeActionCreator(NAMESPACE + '/cleanState');
