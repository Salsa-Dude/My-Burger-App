import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </Fragment>
    );
  }
}

export default BurgerBuilder;
