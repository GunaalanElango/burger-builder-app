import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import axios from "../../axios-orders";

let INGREDIENT_PRICES = {
  salad: 10,
  meat: 20,
  cheese: 5,
  bacon: 5,
};

let MAX_INGREDIENT = {
  cheese: 2,
  salad: 2,
  meat: 2,
  bacon: 3,
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
    const maxCount = MAX_INGREDIENT[type];
    if (maxCount < oldCount + 1) {
      return;
    }
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
    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        name: "Gunaalan",
        mobileNumber: "+919597021544",
        email: "elangogunaalan@gmail.com",
        address: {
          city: "komarapalayam",
          pincode: "638183",
          district: "namakkal",
          state: "Tamil Nadu",
        },
        deliveryMethod: "fastest",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };

    const moreDisableInfo = {
      ...this.state.ingredients,
    };

    for (let key in moreDisableInfo) {
      moreDisableInfo[key] =
        moreDisableInfo[key] === MAX_INGREDIENT[key] ? true : false;
    }

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
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disableInfo={disableInfo}
          orderDisable={orderDisable}
          moreDisableInfo={moreDisableInfo}
          price={this.state.totalPrice}
          orderBtnClick={this.orderBurgerHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
