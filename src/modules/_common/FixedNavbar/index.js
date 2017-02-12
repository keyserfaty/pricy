import React from 'react';
import FontAwesome from 'react-fontawesome';

import './styles.css';

const FixedNavbar = props => {
  const { list, handlePrint } = props;
  return (
    <div id="navbar">
      <span className="creator">
        Creado con ❤️ por <a href="http://www.twiter.com/keyserfaty">@keyserfaty</a>
      </span>
      <span className="print-container">
        <span className="print-quantity">
          🛒 Cantidad: # {list.length}
        </span>
        <button className="print-button" onClick={handlePrint}>
          <FontAwesome style={{ marginRight: '10px' }} name='print' />
          Imprimir etiquetas
        </button>
      </span>
    </div>
  );
};

export default FixedNavbar;
