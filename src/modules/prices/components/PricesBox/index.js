import React from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';
import PricesSingle from '../PriceSingle/';

class PricesBoxContainer extends React.Component {
  singlePrice = {
    price: 0,
    priceCard: 0,
    priceCardInterest: 0
  };

  constructor (props) {
    super(props);
    this.state = {
      list: [
        this.singlePrice
      ]
    };
  }

  handleAddNewPrice () {
    this.setState({
      list: [
        ...this.state.list,
        this.singlePrice
      ]
    });
  }

  handleRemoveSinglePrice (item) {}

  handlePriceOnChange (e) {
    
  }

  render () {
    const { list } = this.state;
    return (
      <span>
        <PricesBox handleAddNewPrice={() => this.handleAddNewPrice()} list={list} />
      </span>
    )
  }
}

const PricesBox = props => {
  const { list, handleAddNewPrice } = props;

  return (
    <div className="box">
      <section className="header">
        <h3>Lista de precios</h3>
        <button className="box-add-button" onClick={handleAddNewPrice}>
          <FontAwesome style={{ marginRight: '10px' }} name='plus' />
          Agregar nuevo
        </button>
      </section>

      <section className="table">
        <table>
          <tr>
            <th style={{ textAlign: 'left' }}>Precio efectivo</th>
            <th>Precio tarjeta</th>
            <th>Precio tarjeta c/interés</th>
            <th><FontAwesome name='trash-o' /></th>
          </tr>

          { list.map((item, i) => <PricesSingle key={i} item={item} />) }

          <tr className="last">
            <td style={{ textAlign: 'left' }}>🛒 Cantidad: # 15</td>
          </tr>
        </table>
      </section>

    </div>
  );
};

export default PricesBoxContainer;
