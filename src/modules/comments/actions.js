import makeActionCreator from 'make-action-creator';

import { NAMESPACE } from './constants';

export const onMount = makeActionCreator(NAMESPACE + '/onMount');
export const create = makeActionCreator(NAMESPACE + '/createComment');

//* ui
export const onChange = makeActionCreator(NAMESPACE + '/onChange');
export const cleanForm = makeActionCreator(NAMESPACE + '/cleanForm');
