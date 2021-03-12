import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  return (
    <div className={classes.Order}>
      <p>
        Ingredients: Salad ({props.ingredients.salad}) Cheese (
        {props.ingredients.cheese}) Bacon ({props.ingredients.bacon}) Meat (
        {props.ingredients.meat})
      </p>
      <p>
        Price: <strong>{props.price} Rupess</strong>
      </p>
    </div>
  );
};

export default order;
