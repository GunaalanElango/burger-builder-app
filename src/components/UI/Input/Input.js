import classes from "./Input.module.css";
import React from "react";

const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          className={classes.Input}
          value={props.value}
        />
      );
      break;
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          className={classes.Input}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={classes.Input}>
          {props.elementConfig.options.map((option) => {
            return <option value={option.value}>{option.displayValue}</option>;
          })}
        </select>
      );
      break;
    default:
      inputElement = null;
      break;
  }

  return (
    <div className={classes.InputGroup}>
      <p>{props.lable}</p>
      {inputElement}
    </div>
  );
};

export default input;
