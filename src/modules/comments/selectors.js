import { createSelector } from 'reselect';

export const getFormData = state => state.comments.formData;
export const getFormDataText = state => state.comments.formData.text;

export const getFormDataWithTimestamp = createSelector(
  getFormDataText,
  text => ({
    text,
    timestamp: Date.now()
  })
);
