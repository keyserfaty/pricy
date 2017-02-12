import React from 'react';
import FontAwesome from 'react-fontawesome';

const ButtonIcon = props => {
  const {
    className,
    onClick,
    label,
    icon
  } = props;

  return (
    <button className={className} onClick={onClick}>
      <FontAwesome style={{ marginRight: '10px' }} name={icon} />
      {label}
    </button>
  );
};

export default ButtonIcon;
