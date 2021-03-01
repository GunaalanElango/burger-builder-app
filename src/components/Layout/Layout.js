import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerHandler = () => {
    const showSideBar = this.state.showSideDrawer ? false : true;
    this.setState({ showSideDrawer: showSideBar });
  };

  render() {
    return (
      <Aux>
        <Toolbar click={this.sideDrawerHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          click={this.sideDrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
