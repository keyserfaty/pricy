import React from 'react';
import './styles.css';

const InputSign = props => {
  const {
    sign,
    value,
    placeholder,
    onChange
  } = props;

  return (
    <span>
      <div className='input-sign'>{sign}</div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type='number'
        className='input'
      />
    </span>
  );
};

export default InputSign;
