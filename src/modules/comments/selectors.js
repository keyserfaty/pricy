import { createSelector } from 'reselect';

export const getFormData = state => state.comments.formData;

export const getFormDataWithTimestamp = createSelector(
  getFormData,
  data => ({
    ...data,
    timestamp: Date.now()
  })
);
