import React from 'react';
import './styles.css';

const PricesBox = props => {
  const {
    title,
    button
  } = props;

  return (
    <div className='box'>
      <section className='box-header'>
        <h3>{title}</h3>
        <span className='box-right'>
          {button}
        </span>
      </section>

      {props.children}
    </div>
  );
};

export default PricesBox;
