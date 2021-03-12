import classes from "./Input.module.css";
import React from "react";

const input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "textarea":
      inputElement = <textarea />;
      break;
    default:
      inputElement = <input {...props} className={classes.Input} />;
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
