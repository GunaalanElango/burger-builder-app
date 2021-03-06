import React from "react";
import Burger from "../Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const ingredients = {
  salad: 1,
  cheese: 1,
  bacon: 1,
  meat: 2,
};

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We Hope it tastes well!!</h1>
      <Burger ingredients={ingredients} />
      <Button type="Danger">CANCEL</Button>
      <Button type="Success">CONTINUE</Button>
    </div>
  );
};

export default checkoutSummary;
