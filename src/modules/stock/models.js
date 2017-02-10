/* @flow */

type FormData = {
  id: string,
  label: string,
  name: string,
  quantity: number,
  image: ArrayBuffer,
  categories: Array<string>,
  salePrice: number,
  boughtPrice: number
};

type Ui = {
  removeCandidate: string,
  editCandidate: string,
  create: {
    formData: FormData
  }
};

export type State = {
  status: string,
  error: string,
  items: Array<string>,
  ui: Ui
};
