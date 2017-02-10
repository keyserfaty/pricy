import React from 'react';
import './styles.css';

import MainMenu from '../MainMenu/'
import Alert from '../Alert';

const MainLayout = props => {
  return (
    <section id="container">
      <MainMenu />
      <Alert
        type='warning'
        text={`
          ¿Qué es esto? Es una aplicación para imprimir etiquetas de precios en tandas.
          Por disposición del Gobierno argentino los locales desde 2017 tienen que mostrar
          a sus clientes los precios en tres formatos: efectivo, tarjeta e  interés.
          Esta aplicación ayuda a generar automáticamente los dos últimos precios y a imprimir las etiquetas.
        `}
      />
    </section>
  )
};

export default MainLayout;
