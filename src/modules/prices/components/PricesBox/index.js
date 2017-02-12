import React from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';
import PricesSingle from '../PriceSingle/';

const PricesBox = props => {
  const { list, handleAddNewPrice, handleOnChangePrice } = props;

  return (
    <div className="box">
      <section className="header">
        <h3>Lista de precios</h3>
        <button className="box-add-button" onClick={handleAddNewPrice}>
          <FontAwesome style={{ marginRight: '10px' }} name='plus' />
          Agregar nuevo
        </button>
      </section>

      <section className="table">
        <table>
          <tr>
            <th style={{ textAlign: 'left' }}>Precio efectivo</th>
            <th>Precio tarjeta</th>
            <th>Precio tarjeta c/interés</th>
            <th><FontAwesome name='trash-o' /></th>
          </tr>

          { list.map((item, i) =>
            <PricesSingle
              id={i}
              item={item}
              handleOnChangePrice={handleOnChangePrice}
            />
          )}

          <tr className="last">
            <td style={{ textAlign: 'left' }}>🛒 Cantidad: # 15</td>
          </tr>
        </table>
      </section>

    </div>
  );
};

export default PricesBox;
