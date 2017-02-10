import React from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

const Alert = props => {
  const { type = 'warning', text } = props;
  return (
    <div className='alert-container'>
      <div className={`alert alert-${type}`}>
        <FontAwesome className='alert-info' name='info-circle' />
        <FontAwesome className='alert-remove' name='times' />
        {text}
      </div>
    </div>
  );
};

export default Alert;
