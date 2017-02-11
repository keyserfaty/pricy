import React from 'react';
import FontAwesome from 'react-fontawesome';

const PriceSingle = props => {
  const {
    item
  } = props;

  return (
    <tr>
      <td style={{ textAlign: 'left' }}>
        <div className="input-sign">$</div>
        <input className="input" type="text"/>
      </td>
      <td>{item.priceCard}</td>
      <td>{item.priceCardInterest}</td>
      <td>
        <button className="box-remove-button" >
          <FontAwesome name='trash-o' />
        </button>
      </td>
    </tr>
  );
};

export default PriceSingle;
