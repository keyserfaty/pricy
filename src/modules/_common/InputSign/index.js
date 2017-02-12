import React from 'react';
import './styles.css';

const InputSign = props => {
  const {
    value,
    onChange
  } = props;

  return (
    <span>
      <div className='input-sign'>$</div>
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
