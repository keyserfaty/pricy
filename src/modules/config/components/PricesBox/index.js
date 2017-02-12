import React from 'react';
import './styles.css';

import ButtonIcon from '../../../_common/ButtonIcon/';
import FontAwesome from 'react-fontawesome';
import PricesSingle from '../PriceSingle/';

const PricesBox = props => {
  const { list, handleAddNewPrice, handleOnChangePrice, handleRemovePrice } = props;

  return (
    <div className='box'>
      <section className='header'>
        <h3>Lista de precios</h3>
        <ButtonIcon
          icon='plus'
          label='Agregar nuevo'
          className='box-add-button'
          onClick={handleAddNewPrice}
        />
      </section>

      <section className='table'>
        <table>
          <tr>
            <th style={{ textAlign: 'left' }}>Precio efectivo</th>
            <th>Precio 3 cuotas</th>
            <th>Precio 12 cuotas</th>
            <th><FontAwesome name='trash-o' /></th>
          </tr>

          { list.map((item, i) =>
            <PricesSingle
              id={i}
              item={item}
              handleOnChangePrice={handleOnChangePrice}
              handleRemovePrice={handleRemovePrice}
            />
          )}

          <tr className='last'>
            <td style={{ textAlign: 'left' }}>🛒 Cantidad: # {list.length}</td>
          </tr>
        </table>
      </section>

    </div>
  );
};

export default PricesBox;
