import React, { Component } from "react";
import CheckoutSummary from "../../components/Burger/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
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
          ingredients={this.props.ings}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => <ContactData {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps, null)(Checkout);
