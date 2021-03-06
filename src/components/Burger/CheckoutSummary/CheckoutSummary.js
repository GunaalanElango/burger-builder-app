import React from "react";
import Burger from "../Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We Hope it tastes well!!</h1>
      <Burger ingredients={props.ingredients} />
      <Button type="Danger" click={props.dangerClicked}>
        CANCEL
      </Button>
      <Button type="Success" click={props.successClicked}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
