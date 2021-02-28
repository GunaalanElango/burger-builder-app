import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button
      onClick={props.click}
      className={[classes.Button, classes[props.type]].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default button;
