import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SweetAlert from 'sweetalert-react';

import Header from '../../_common/Header';

import ListTable from '../components/List/ListTable';

import * as selectors from '../selectors';

import * as actions from '../actions';
import * as barcodesActions from '../../barcodes/actions';

import { withHooks } from '../../../utils/withHooks';

const List = props => {
  const {
    itemsToPrint,
    removeCandidate,
    handleRemoveProduct,
    handleAddRemoveCandidate
  } = props;

  const sweetTitle = {
    fontWeight: '400',
    lineHeight: '1.2',
    color: '#37474f'
  };

  return (
    <div>
      <Header
        title='Stock'
        breadcrumbs={[
          {
            title: 'Stock',
            link: '/',
            active: true
          }
        ]}
        right={
          <span>
            <Link to='barcodes/list'>
              <button
                type="button"
                className="btn btn-squared btn-outline btn-default"
                style={{ marginRight: '10px' }}
              >
                <i className='icon wb-print' /> Cód. de barras <span className="tag tag-pill">{itemsToPrint.length}</span>
              </button>
            </Link>
            <Link to='stock/create'>
              <button className='btn btn-default'>
                <i className='icon wb-plus' />
                Agregar productos
              </button>
            </Link>
          </span>
        }
      />
      <div>
        <SweetAlert
          style={sweetTitle}
          show={!!removeCandidate}
          type='warning'
          title='Eliminar producto'
          text='Si eliminás este producto no se podrá recuperar'
          showCancelButton
          onConfirm={handleRemoveProduct}
          onCancel={() => handleAddRemoveCandidate('')}
        />
      </div>

      <ListTable {...props} />
    </div>
  );
};


const mapStateToProps = state => ({
  items: selectors.getItems(state),
  status: selectors.getStatus(state),
  removeCandidate: selectors.getRemoveCandidate(state),
  editCandidate: selectors.getEditCandidate(state),
  itemsToPrint: selectors.getUnprintedItems(state)
});

const mapDispatchToProps = dispatch => ({
  onMount: () => {
    dispatch(actions.fetchAll());
    dispatch(barcodesActions.getLastPrintingDate());
  },
  onUnmount: () => dispatch(actions.cleanState()),
  handleAddRemoveCandidate: id => dispatch(actions.onRemoveCandidate({ id })),
  handleAddEditCandidate: id => dispatch(actions.onEditCandidate({ id })),
  handleRemoveProduct: () => dispatch(actions.remove())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List));
