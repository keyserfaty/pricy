import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import './styles.css';

import PricesSingle from '../components/PriceSingle/';
import PricesBox from '../../_common/PricesBox/'
import ButtonIcon from '../../_common/ButtonIcon/';

import * as actions from '../actions';
import * as selectors from '../selectors';
import * as configSelectors from '../../config/selectors';

import { withHooks } from '../../../utils/withHooks';

const List = props => {
  const { list, instalments, handleAddNewPrice, handleOnChangePrice, handleRemovePrice } = props;

  return (
    <PricesBox
      title='Lista de precios'
      button={
        <span>
          <Link to='config'>
            <ButtonIcon
              className='box-config-button'
              icon='cog'
              type='secondary'
              label='Configurar'
            />
          </Link>

          <ButtonIcon
            icon='plus'
            type='primary'
            label='Agregar nuevo'
            onClick={handleAddNewPrice}
          />
        </span>
      }
    >
      <section className='table'>
        <table>
          <tbody>
            <tr>
              <th style={{ textAlign: 'left' }}>Precio efectivo</th>
              {instalments.map((instalment, index) =>
                <th key={`${instalment}-${index}`}>Precio {instalment.quantity} cuotas ({instalment.interest}%)</th>
              )}

              <th><FontAwesome name='trash-o' /></th>
            </tr>
            { list.map((item, i) =>
              <PricesSingle
                id={i}
                key={i}
                item={item.prices}
                handleAddNewPrice={handleAddNewPrice}
                handleOnChangePrice={handleOnChangePrice}
                handleRemovePrice={handleRemovePrice}
              />
            )}

            <tr className='last'>
              <td style={{ textAlign: 'left' }}>🛒 Cantidad: # {list.length}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </PricesBox>
  );
};


const mapStateToProps = state => ({
  list: selectors.getListWithInterestPrices(state),
  instalments: configSelectors.getInstalments(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleAddNewPrice: () => dispatch(actions.addPrice()),
  handleRemovePrice: price => dispatch(actions.removePrice({ ...price })),
  handleOnChangePrice: price =>  dispatch(actions.onChangePrice({ ...price }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List));
