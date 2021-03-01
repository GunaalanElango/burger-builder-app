import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

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
      <p>
        <strong>Total Price: {props.price} Rupess</strong>
      </p>
      <p>Do want to continue?</p>
      <Button type="Danger" click={props.cancel}>
        CANCEL
      </Button>
      <Button type="Success" click={props.continue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
