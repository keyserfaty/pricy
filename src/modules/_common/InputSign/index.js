import React from 'react';
import './styles.css';

const InputText = props => {
  const {
    sign,
    name,
    type,
    value,
    style,
    onChange,
    onKeyDown,
    placeholder
  } = props;

  return (
    <span>
      { sign && <div className='input-sign'>{sign}</div> }
      <input
        autoFocus
        type={type}
        name={name}
        style={style}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='input'
        onKeyDown={onKeyDown}
      />
    </span>
  );
};

export default InputText;
