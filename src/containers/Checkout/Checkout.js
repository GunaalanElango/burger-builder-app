import React, { Component } from "react";
import CheckoutSummary from "../../components/Burger/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      bacon: 1,
      meat: 1,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }

  cancelHandler = () => {
    this.props.history.goBack();
  };

  continueHandler = () => {};

  render() {
    return (
      <div>
        <CheckoutSummary
          dangerClicked={this.cancelHandler}
          successClicked={this.continueHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
