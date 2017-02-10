import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { withHooks } from '../../../utils/withHooks';

import Header from '../../_common/Header';

import CreateElement from '../components/Create/Create';

import * as selectors from '../selectors';
import * as categoriesSelectors from '../../categories/selectors';

import * as stockActions from '../actions';
import * as categoriesActions from '../../categories/actions';

const Create = props => {
  return (
    <div>
      <Header
        title='Agregar stock'
        breadcrumbs={[
          {
            title: 'Stock',
            link: '/stock'
          },
          {
            title: 'Agregar',
            link: '/stock/create',
            active: true
          }
        ]}
      />
      <CreateElement {...props} />

      <Link to='/stock'>
        <button
          type="button"
          className="btn btn-outline btn-default"
        >
          <i className="icon wb-arrow-left" /> Volver a la lista
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  status: selectors.getStatus(state),
  error: selectors.getError(state),
  formData: selectors.getCreateFormData(state),
  categories: categoriesSelectors.getItems(state)
});

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(categoriesActions.fetchAll()),
  onUnmount: () => dispatch(stockActions.cleanState()),

  onChange: (e) => dispatch(stockActions.onChange({ [e.target.name]: e.target.value })),
  handleImageLoad: (file) => dispatch(stockActions.onImage({ file })),
  handleImageRemove: () => dispatch(stockActions.onRemoveImage()),

  handleCreate: () => dispatch(stockActions.create()),
  handleDiscard: () => dispatch(stockActions.cleanForm()),
  handleCloseAlertBox: () => dispatch(stockActions.closeAlertBox())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(Create));
