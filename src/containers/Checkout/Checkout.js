import React, { Component } from "react";
import CheckoutSummary from "../../components/Burger/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
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
        />
      </div>
    );
  }
}

export default Checkout;
