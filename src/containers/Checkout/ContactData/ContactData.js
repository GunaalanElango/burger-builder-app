import React, { Component } from "react";
import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
          name: "name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Mail",
          name: "email",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Street",
          name: "street",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your PostalCode",
          name: "zipCode",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
          name: "deliveryMethod",
        },
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.price,
      customer: {
        name: "Gunaalan",
        email: "elangogunaalan@gmail.com",
        address: {
          pincode: "638183",
          street: "Tamil Nadu",
        },
        deliveryMethod: "fastest",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => this.setState({ loading: false }));
  };

  inputChangeHandler = (event) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedInputElement = {
      ...updatedOrderForm[event.target.name],
    };
    updatedInputElement.value = event.target.value;
    updatedOrderForm[event.target.name] = updatedInputElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    let inputElements = [];
    for (let key in this.state.orderForm) {
      inputElements.push(
        <Input
          key={key}
          elementConfig={this.state.orderForm[key].elementConfig}
          elementType={this.state.orderForm[key].elementType}
          value={this.state.orderForm[key].value}
          changed={this.inputChangeHandler}
        />
      );
    }

    return (
      <div className={classes.ContactData}>
        <h3>Contact form</h3>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form>
            {inputElements}
            <Button type="Success" click={this.orderHandler}>
              ORDER
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactData;
