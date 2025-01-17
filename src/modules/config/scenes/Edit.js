import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './styles.css';

import PricesBox from '../../_common/PricesBox/'
import InputSign from '../../_common/InputSign/'
import ButtonIcon from '../../_common/ButtonIcon/'

import * as actions from '../actions';
import * as selectors from '../selectors';

import { withHooks } from '../../../utils/withHooks';

const Edit = props => {
  const {
    instalments,
    cashDiscount,
    handleCleanState,
    handleSaveChanges,
    handleInterestChange,
    handleCashDiscountChange
  } = props;

  return (
    <PricesBox
      title='Configuración'
    >
      <div className='config-price-container'>
        <div className='config-price-label'>Descuento en efectivo</div>
        <InputSign
          sign='%'
          type='number'
          value={cashDiscount}
          style={{ marginLeft: '-3px' }}
          onChange={(e) => handleCashDiscountChange(e.target.value)}
        />
      </div>

      { instalments.map((instalment, i) =>
        <div key={i} className='config-price-container'>
          <div className='config-price-label'>Interés en {instalment.quantity} cuotas</div>
          <InputSign
            sign='%'
            type='number'
            value={instalment.interest}
            style={{ marginLeft: '-3px' }}
            onChange={(e) => handleInterestChange({ id: i, interest: e.target.value })}
          />
        </div>
      )}

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
  instalments: selectors.getUi(state).instalments,
  cashDiscount: selectors.getUi(state).cashDiscount
});

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(actions.onMount()),
  handleInterestChange: (instalments) => dispatch(actions.onChangeInterest({ ...instalments })),
  handleCashDiscountChange: (discount) => dispatch(actions.onChangeCashDiscount(discount)),
  handleSaveChanges: () => dispatch(actions.saveChanges()),
  handleCleanState: () => dispatch(actions.cleanState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(Edit));
