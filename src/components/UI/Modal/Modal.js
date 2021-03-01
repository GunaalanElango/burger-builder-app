import React, { Component } from "react";
import classes from "./Modal.module.css";

class Modal extends Component {
  componentWillUpdate() {
    console.log("updates modal");
  }

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
    return <div className={modalClass.join(" ")}>{this.props.children}</div>;
  }
}

export default Modal;
