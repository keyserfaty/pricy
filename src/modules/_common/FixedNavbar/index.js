import React from 'react';
import './styles.css';

import ButtonIcon from '../ButtonIcon/';

const FixedNavbar = props => {
  const { list, handlePrint } = props;
  return (
    <div id='navbar'>
      <span className='creator'>
        Creado con ❤️ por <a href='https://twitter.com/keyserfaty'>@keyserfaty</a>
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
