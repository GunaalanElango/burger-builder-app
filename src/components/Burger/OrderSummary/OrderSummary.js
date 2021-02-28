import React from "react";
import Aux from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map((key, index) => {
    return (
      <li key={index}>
        <span style={{ textTransform: "capitalize" }}>{key}:</span>
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredients}</ul>
      <p>Do want to continue?</p>
    </Aux>
  );
};

export default orderSummary;
