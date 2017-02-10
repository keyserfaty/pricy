import React from 'react';
import FontAwesome from 'react-fontawesome';
import './styles.css';


const MainMenu = props => {
  return (
    <header>
      <h1>hola 👋. soy una impresora de precios.</h1>
      <span className='icon'>
        <FontAwesome name='cog' />
      </span>
    </header>
  )
};

export default MainMenu;
