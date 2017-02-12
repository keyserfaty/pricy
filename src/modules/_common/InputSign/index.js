import React from 'react';
import './styles.css';

const InputSign = props => {
  const {
    sign,
    value,
    onChange
  } = props;

  return (
    <span>
      <div className='input-sign'>{sign}</div>
      <input
        value={value}
        onChange={onChange}
        type='number'
        className='input'
      />
    </span>
  );
};

export default InputSign;
