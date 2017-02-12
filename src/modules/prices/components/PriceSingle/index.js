import React from 'react';

import InputSign from '../../../_common/InputSign/';
import ButtonIcon from '../../../_common/ButtonIcon/';

const PriceSingle = props => {
  const {
    id,
    item,
    interest,
    handleOnChangePrice,
    handleRemovePrice
  } = props;

  return (
    <tr key={id} className='animated fadeIn' style={{ animationDuration: '0.5s' }}>
      <td style={{ textAlign: 'left' }}>
        <InputSign
          sign='$'
          value={item.price}
          onChange={(e) => handleOnChangePrice({ id, interest, price: e.target.value })}
        />
      </td>
      <td>$ {item.priceCard}</td>
      <td>$ {item.priceCardInterest}</td>
      <td>
        <ButtonIcon
          className="box-remove-button"
          onClick={() => handleRemovePrice({ id })}
          icon='trash-o'
        />
      </td>
    </tr>
  );
};

export default PriceSingle;
