import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      activeClassName={classes.active}
      // activeStyle={{
      //   borderBottom: "4px solid #40a4c8",
      //   background: "#8f5c2c",
      //   color: " white",
      // }}
      exact
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
