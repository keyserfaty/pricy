import React from 'react';
import FontAwesome from 'react-fontawesome';

const PriceSingle = props => {
  const {
    id,
    item,
    handleOnChangePrice
  } = props;

  return (
    <tr key={id}>
      <td style={{ textAlign: 'left' }}>
        <div className="input-sign">$</div>
        <input
          value={item.price}
          onChange={(e) => handleOnChangePrice({ id, price: e.target.value })}
          className="input"
          type="number"
        />
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
