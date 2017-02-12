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
  return (
    <PricesBox
      title='Configuración'
    >
      <div className='config-price-container'>
        <div className='config-price-label'>Interés en 3 cuotas</div>
        <InputSign
          sign='$'
          value={0}
          onChange={() => {}}
        />
      </div>
      <div className='config-price-container'>
        <div className='config-price-label'>Interés en 3 cuotas</div>
        <InputSign
          sign='$'
          value={0}
          onChange={() => {}}
        />
      </div>

      <div className='config-price-footer'>
        <Link to='prices'>
          <ButtonIcon
            icon='times'
            type='secondary'
            label='Cancelar'
          />
        </Link>

        <ButtonIcon
          style={{ marginLeft: '20px' }}
          icon='floppy-o'
          type='primary'
          label='Guardar cambios'
        />
      </div>
    </PricesBox>
  );
};


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(Edit));
