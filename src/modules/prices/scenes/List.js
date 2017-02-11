import React from 'react';
import { connect } from 'react-redux';

import PricesBoxContainer from '../components/PricesBox/'

// import * as selectors from '../selectors';
// import * as actions from '../actions';

import { withHooks } from '../../../utils/withHooks';

const List = props => {
  return (
    <PricesBoxContainer />
  );
};


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List));
