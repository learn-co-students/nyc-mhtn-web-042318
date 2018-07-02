import React, { Component } from 'react';
import Cupcake from './Cupcake';
import Filling from './Filling';
import Topping from './Topping';

class Cupbake extends Component {
  renderCupcake(cupcake) {
    if (!cupcake) {
      return null;
    }

    return (
      <React.Fragment>
        <h3>Cupcake</h3>
        <Cupcake
          name={cupcake.name}
          ingredients={cupcake.ingredients}
        />
      </React.Fragment>
    )
  }

  renderFilling(filling) {
    if (!filling) {
      return null;
    }

    return (
      <React.Fragment>
        <h3>Filling</h3>
        <Filling name={filling.name} />
      </React.Fragment>
    )
  }

  renderToppings(toppings) {
    if (!toppings || toppings.length === 0) {
      return null;
    }

    return (
      <React.Fragment>
        <h3>Toppings</h3>
        {toppings.map(topping => <Topping key={topping.id} name={topping.name} />)}
      </React.Fragment>
    )
  }

  render() {
    const { cupcake, filling, toppings } = this.props.cupbake;
    return (
      <div className="border column">
        <h2>Our Cupbake</h2>
        {this.renderCupcake(cupcake)}
        {this.renderFilling(filling)}
        {this.renderToppings(toppings)}
      </div>
    )
  }
}

export default Cupbake;
