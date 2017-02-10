import makeActionCreator from 'make-action-creator';

import { NAMESPACE } from './constants';

export const fetchAll = makeActionCreator(NAMESPACE + '/fetchAll', {rrSpinner: true});
export const fetchOne = makeActionCreator(NAMESPACE + '/fetchOne', {rrSpinner: true});
export const update = makeActionCreator(NAMESPACE + '/update', {rrSpinner: true});
export const remove = makeActionCreator(NAMESPACE + '/remove', {rrSpinner: true});
export const create = makeActionCreator(NAMESPACE + '/create', {rrSpinner: true});

//* ui
export const onChange = makeActionCreator(NAMESPACE + '/onChange');
export const closeAlertBox = makeActionCreator(NAMESPACE + '/closeAlertBox');

export const onImage = makeActionCreator(NAMESPACE + '/onImage');
export const onRemoveImage = makeActionCreator(NAMESPACE + '/onRemoveImage');
export const onRemoveCandidate = makeActionCreator(NAMESPACE + '/onRemoveCandidate');
export const onEditCandidate = makeActionCreator(NAMESPACE + '/onEditCandidate');

export const cleanState = makeActionCreator(NAMESPACE + '/cleanState');
export const cleanForm = makeActionCreator(NAMESPACE + '/cleanForm');
