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

const formatNumber = (value) => {
  if (!value) return '';
  // Convert to string and replace dots with commas for decimal
  return value.toString()
    .replace('.', ',')
    // Add dots for thousands
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const List = props => {
  const { list, instalments, cashDiscount, handleAddNewPrice, handleOnChangePrice, handleRemovePrice } = props;

  return (
    <PricesBox
      title='Lista de precios'
      button={
        <div className='button-container'>
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
        </div>
      }
    >
      <div className='prices-container'>
        <div className='prices-desktop'>
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Precio base</th>
                <th>Precio efectivo ({cashDiscount}% desc.)</th>
                {instalments.map((instalment, index) =>
                  <th key={`${instalment}-${index}`}>Precio {instalment.quantity} cuotas ({instalment.interest}%)</th>
                )}
                <th><FontAwesome name='trash-o' /></th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, i) =>
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
                <td colSpan={instalments.length + 3} style={{ textAlign: 'left' }}>🛒 Cantidad: # {list.length}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='prices-mobile'>
          {list.map((item, i) => (
            <div key={i} className='price-card'>
              <div className='price-card-header'>
                <span>Precio lista</span>
                <ButtonIcon
                  className='box-remove-button'
                  icon='trash-o'
                  type='secondary'
                  onClick={() => handleRemovePrice({ id: i })}
                />
              </div>
              <div className='price-card-content'>
                <div className='price-row'>
                  <label>Base:</label>
                  <PricesSingle
                    id={i}
                    key={i}
                    item={item.prices}
                    isMobile={true}
                    handleAddNewPrice={handleAddNewPrice}
                    handleOnChangePrice={handleOnChangePrice}
                    handleRemovePrice={handleRemovePrice}
                  />
                </div>
                <div className='price-row'>
                  <label>Efectivo ({cashDiscount}% desc.):</label>
                  <span className='cash-discount-price'>${formatNumber((item.prices[1] && item.prices[1].price) || '0')}</span>
                </div>
                {instalments.map((instalment, index) => (
                  <div key={`${instalment}-${index}`} className='price-row'>
                    <label>{instalment.quantity} cuotas ({instalment.interest}%):</label>
                    <span>${formatNumber((item.prices[index + 2] && item.prices[index + 2].price) || '0')}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className='price-card-footer'>
            🛒 Cantidad: # {list.length}
          </div>
        </div>
      </div>
    </PricesBox>
  );
};


const mapStateToProps = state => ({
  list: selectors.getListWithInterestPrices(state),
  instalments: configSelectors.getInstalments(state),
  cashDiscount: configSelectors.getCashDiscount(state)
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
