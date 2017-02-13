import React from 'react';
import './styles.css';

import ButtonIcon from '../ButtonIcon/';

const FixedNavbar = props => {
  const { list, interest, handlePrint } = props;
  return (
    <div id='navbar'>
      <span className='creator'>
        <ButtonIcon
          type='secondary'
          label='Dejar un comentario'
          icon='commenting-o'
        />
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
            onClick={() => handlePrint(list, interest)}
          />
        </span>
      </span>
    </div>
  );
};

export default FixedNavbar;
