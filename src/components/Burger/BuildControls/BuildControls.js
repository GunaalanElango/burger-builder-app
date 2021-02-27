import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const buildControls = (props) => {
  const buildControl = controls.map((control) => {
    return <BuildControl key={control.type} label={control.label} />;
  });

  return <div className={classes.BuildControls}>{buildControl}</div>;
};

export default buildControls;
