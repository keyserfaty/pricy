import React from 'react';
import { connect } from 'react-redux';

import PricesBoxContainer from '../components/PricesBox/'

// import * as selectors from '../selectors';
import * as actions from '../actions';

import { withHooks } from '../../../utils/withHooks';

const List = props => {
  return (
    <PricesBoxContainer {...props} />
  );
};


const mapStateToProps = state => ({
  list: state.prices.list
});

const mapDispatchToProps = dispatch => ({
  handleAddNewPrice: () => dispatch(actions.addPrice()),
  handleRemovePrice: (prices) => dispatch(actions.removePrice({ ...prices })),
  handleOnChangePrice: (prices) => dispatch(actions.onChangePrice({ ...prices }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List));
