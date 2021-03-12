import React, { Component } from "react";
import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";

class ContactData extends Component {
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.totalPrice,
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
      .then((response) => this.setState({ loading: false, showModal: false }))
      .catch((error) => this.setState({ loading: false }));
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h3>Contact form</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Mail" />
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="Zip code" />
          <Button type="Success" click={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
