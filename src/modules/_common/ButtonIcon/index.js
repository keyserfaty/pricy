import React from 'react';
import FontAwesome from 'react-fontawesome';
import './styles.css';

const ButtonIcon = props => {
  const {
    onClick,
    className,
    label,
    icon,
    type
  } = props;

  return (
    <button className={`button-${type} ${className}`} onClick={onClick}>
      <FontAwesome style={{ marginRight: '10px' }} name={icon} />
      {label}
    </button>
  );
};

export default ButtonIcon;
