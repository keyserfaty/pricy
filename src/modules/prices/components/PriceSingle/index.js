import React from 'react';

import InputSign from '../../../_common/InputSign/';
import ButtonIcon from '../../../_common/ButtonIcon/';

const PriceSingle = props => {
  const {
    id,
    item,
    handleAddNewPrice,
    handleOnChangePrice,
    handleRemovePrice
  } = props;

  return (
    <tr key={id} className='animated fadeIn' style={{ animationDuration: '0.5s' }}>
      { item.map(each => {
        if (each.instalments === 0) {
          return (
            <td style={{ textAlign: 'left' }}>
              <InputSign
                sign='$'
                type='number'
                placeholder='0'
                value={each.price}
                style={{ marginLeft: '-3px' }}
                onKeyDown={(e) => e.which === 13 && handleAddNewPrice()}
                onChange={(e) => handleOnChangePrice({ id, price: e.target.value })}
              />
            </td>
          )
        }

        return <td>$ {each.price}</td>
      }) }
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
