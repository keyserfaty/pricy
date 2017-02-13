import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './styles.css';

import PricesBox from '../../_common/PricesBox/'
import InputSign from '../../_common/InputSign/'
import ButtonIcon from '../../_common/ButtonIcon/'

import * as actions from '../actions';

import { withHooks } from '../../../utils/withHooks';

const Edit = props => {
  const {
    interest,
    handleCleanState,
    handleSaveChanges,
    handleInterestChange
  } = props;

  return (
    <PricesBox
      title='Dejá un comentario'
    >
      <div className='comments-container'>
        <p>¿Querés sugerir una funcionalidad, te encontraste con un error o querés saludar a la creadora? Este es el lugar para dejar tu comentario.</p>
        <textarea name="comment" className='comments-input' />
        <ButtonIcon
          type='primary'
          label='Enviar comentario'
          icon='paper-plane'
        />
      </div>
    </PricesBox>
  );
};


const mapStateToProps = state => ({
  interest: state.config.ui.interest
});

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(actions.onMount()),
  handleInterestChange: (interest) => dispatch(actions.onChangeInterest({ ...interest })),
  handleSaveChanges: () => dispatch(actions.saveChanges()),
  handleCleanState: () => dispatch(actions.cleanState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(Edit));
