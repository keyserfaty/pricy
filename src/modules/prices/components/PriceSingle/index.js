import React from 'react';

import InputSign from '../../../_common/InputSign/';
import ButtonIcon from '../../../_common/ButtonIcon/';

const PriceSingle = props => {
  const {
    id,
    item,
    instalments,
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
                value={each.price}
                placeholder='0'
                onChange={(e) => handleOnChangePrice({ id, instalments, price: e.target.value })}
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
