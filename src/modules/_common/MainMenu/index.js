import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import './styles.css';

const MainMenu = props => {
  return (
    <header>
      <h1>hola 👋. soy una impresora de precios.</h1>
      <Link to='config'>
        <span className='icon'>
          <FontAwesome name='cog' />
        </span>
      </Link>
    </header>
  )
};

export default MainMenu;
