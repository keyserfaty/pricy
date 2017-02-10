import React from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

const PricesBox = props => {
  return (
    <div className="box">
      <section className="header">
        <h3>Lista de precios</h3>
        <button className="box-add-button">
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
          <tr>
            <td style={{ textAlign: 'left' }}>
              <div className="input-sign">$</div>
              <input className="input" type="text"/>
            </td>
            <td>Doe</td>
            <td>John</td>
            <td>
              <button className="box-remove-button" >
                <FontAwesome name='trash-o' />
              </button>
            </td>
          </tr>
          <tr className="last">
            <td style={{ textAlign: 'left' }}>🛒 Cantidad: # 15</td>
          </tr>
        </table>
      </section>

    </div>
  );
};

export default PricesBox;
