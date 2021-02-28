import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        onClick={() => props.addIngredient(props.type)}
        className={classes.More}
      >
        More
      </button>
      <button
        onClick={() => props.removeIngredient(props.type)}
        className={classes.Less}
        disabled={props.lessBtnDisable}
      >
        Less
      </button>
    </div>
  );
};

export default buildControl;
