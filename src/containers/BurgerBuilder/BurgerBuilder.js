import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

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
    showModal: false,
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

  orderBurgerHandler = () => {
    this.setState({ showModal: true });
  };

  backdropHandler = () => {
    this.setState({ showModal: false });
  };

  continueCheckoutHandler = () => {
    alert("Do you confirm");
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };

    let orderBtnDisable = [];
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] === 0 ? true : false;
      orderBtnDisable.push(disableInfo[key]);
    }

    const orderDisable = !orderBtnDisable.includes(false, 0);

    return (
      <Aux>
        <Backdrop show={this.state.showModal} click={this.backdropHandler} />
        <Modal showModal={this.state.showModal}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.backdropHandler}
            continue={this.continueCheckoutHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disableInfo={disableInfo}
          orderDisable={orderDisable}
          price={this.state.totalPrice}
          orderBtnClick={this.orderBurgerHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
