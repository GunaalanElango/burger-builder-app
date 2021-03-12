import React, { Component } from "react";
import Order from "../../components/Burger/Order/Order";
import axios from "../../axios-orders";

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            id: key,
            ...response.data[key],
          });
        }
        this.setState({ orders: fetchedOrders, loading: false });
      })
      .catch((error) => this.setState({ loading: false }));
  }

  render() {
    let orders = [];
    for (const order of this.state.orders) {
      orders.push(
        <Order
          key={order.id}
          price={order.totalPrice}
          ingredients={order.ingredients}
        />
      );
    }

    return <div>{orders}</div>;
  }
}

export default Orders;
