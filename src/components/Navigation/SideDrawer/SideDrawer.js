import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const sideDrawer = (props) => (
  <Aux>
    <Backdrop show={props.show} click={props.click} />
    <div
      className={
        props.show
          ? [classes.SideDrawer, classes.Open].join(" ")
          : [classes.SideDrawer, classes.Close].join(" ")
      }
    >
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </Aux>
);

export default sideDrawer;
