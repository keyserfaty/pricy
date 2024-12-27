import React from 'react';

import InputSign from '../../../_common/InputSign/';
import ButtonIcon from '../../../_common/ButtonIcon/';

const formatNumber = (value) => {
  if (!value) return '';
  // Convert to string and replace dots with commas for decimal
  return value.toString()
    .replace('.', ',')
    // Add dots for thousands
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const parseNumber = (value) => {
  if (!value) return '';
  // Remove thousand separators and convert comma to dot for calculation
  return value.replace(/\./g, '').replace(',', '.');
};

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
      { item.map((each, index) => {
        if (each.instalments === 0) {
          return (
            <td style={{ textAlign: 'left' }} key={`${id}-${index}`}>
              <InputSign
                sign='$'
                type='text'
                placeholder='0'
                value={formatNumber(each.price) || ''}
                style={{ marginLeft: '-3px' }}
                onKeyDown={(e) => e.which === 13 && handleAddNewPrice()}
                onChange={(e) => handleOnChangePrice({ 
                  id, 
                  price: parseNumber(e.target.value)
                })}
              />
            </td>
          )
        }
        return <td key={`${id}-${index}`}>$ {formatNumber(each.price)}</td>
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
