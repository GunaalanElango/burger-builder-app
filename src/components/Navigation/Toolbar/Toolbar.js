import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>.</nav>
    </div>
  );
};

export default toolbar;
