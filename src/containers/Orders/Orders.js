import React, { Component } from "react";
import Order from "../../components/Burger/Order/Order";
import { connect } from "react-redux";
import { initOrders } from "../../store/actions/order";

class Orders extends Component {
  componentDidMount() {
    this.props.onInitOrders();
  }

  render() {
    let orders = [];
    for (const order of this.props.orders) {
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

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInitOrders: () => dispatch(initOrders()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
