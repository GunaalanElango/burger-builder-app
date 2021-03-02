import React, { Component } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.showModal !== this.props.showModal ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    let modalClass = [classes.Modal];
    if (this.props.showModal) {
      modalClass.push(classes.Display);
    }

    return (
      <Aux>
        <Backdrop show={this.props.showModal} click={this.props.click} />
        <div className={modalClass.join(" ")}>{this.props.children}</div>
      </Aux>
    );
  }
}

export default Modal;
