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
      title='Configuración'
    >
      <div className='config-price-container'>
        <div className='config-price-label'>Interés en 3 cuotas</div>
        <InputSign
          sign='%'
          value={interest.due3}
          onChange={(e) => handleInterestChange({ due: 'due3', value: e.target.value })}
        />
      </div>
      <div className='config-price-container'>
        <div className='config-price-label'>Interés en 12 cuotas</div>
        <InputSign
          sign='%'
          value={interest.due12}
          onChange={(e) => handleInterestChange({ due: 'due12', value: e.target.value })}
        />
      </div>

      <div className='config-price-footer'>
        <Link to='prices'>
          <ButtonIcon
            icon='times'
            type='secondary'
            label='Cancelar'
            onClick={handleCleanState}
          />
        </Link>

        <Link to='prices'>
          <ButtonIcon
            style={{ marginLeft: '20px' }}
            icon='floppy-o'
            type='primary'
            label='Guardar cambios'
            onClick={handleSaveChanges}
          />
        </Link>
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
