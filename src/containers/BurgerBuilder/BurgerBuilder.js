import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

let INGREDIENT_PRICES = {
  salad: 10,
  meat: 20,
  cheese: 5,
  bacon: 5,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 50,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = oldCount + 1;
    const addedPrice = INGREDIENT_PRICES[type];
    const curPrice = this.state.totalPrice;
    const newPrice = addedPrice + curPrice;
    this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    const removedPrice = INGREDIENT_PRICES[type];
    const curPrice = this.state.totalPrice;
    const newPrice = curPrice - removedPrice;
    updatedIngredient[type] = oldCount - 1;
    this.setState({ ingredients: updatedIngredient, totalPrice: newPrice });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
