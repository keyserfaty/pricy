import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import * as actions from '../../prices/actions';

import MainMenu from '../MainMenu/';
import FixedNavbar from '../FixedNavbar/';
import Alert from '../Alert';

const MainLayout = props => {
  return (
    <div id="main">
      <div id="container">
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

        {props.children}
      </div>
      <FixedNavbar {...props} />
    </div>
  )
};

const mapStateToProps = state => ({
  list: state.prices.list
});

const mapDispatchToProps = dispatch => ({
  handlePrint: () => dispatch(actions.startPrint())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
