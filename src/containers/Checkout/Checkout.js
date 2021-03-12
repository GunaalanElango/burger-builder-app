import React, { Component } from "react";
import CheckoutSummary from "../../components/Burger/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = +param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, price: price });
  }

  cancelHandler = () => {
    this.props.history.goBack();
  };

  continueHandler = () => {
    this.props.history.push(this.props.match.path + "/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          dangerClicked={this.cancelHandler}
          successClicked={this.continueHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
