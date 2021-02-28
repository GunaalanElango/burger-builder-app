import React from "react";
import classes from "./Modal.module.css";

const modal = (props) => {
    let modalClass = [classes.Modal];
    if (props.showModal) {
        modalClass.push(classes.Display)
    }

    return <div className={modalClass.join(" ")}>{props.children}</div>
}

export default modal;
