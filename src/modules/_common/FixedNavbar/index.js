import React from 'react';
import { Link } from 'react-router';
import './styles.css';

import ButtonIcon from '../ButtonIcon/';

const FixedNavbar = props => {
  const { list, handlePrint } = props;
  return (
    <div id='navbar'>
      <span className='creator'>
        <Link to='comment'>
          <ButtonIcon
            type='secondary'
            label='Dejar un comentario'
            icon='commenting-o'
          />
        </Link>
      </span>
      <span className='print-container'>
        <span className='print-quantity'>
          🛒 Cantidad: # {list.length}
        </span>
        <span className="print-button">
          <ButtonIcon
            icon='print'
            type='success'
            label='Imprimir etiquetas'
            onClick={() => handlePrint(list)}
          />
        </span>
      </span>
    </div>
  );
};

export default FixedNavbar;
