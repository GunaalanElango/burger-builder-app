import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const setOrders = (orders) => {
  return {
    type: actionTypes.SET_ORDERS,
    orders,
  };
};

export const initOrders = () => {
  return (dispatch) => {
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
        dispatch(setOrders(fetchedOrders));
      })
      .catch((error) => {
        console.log(error)
      });
  };
};
