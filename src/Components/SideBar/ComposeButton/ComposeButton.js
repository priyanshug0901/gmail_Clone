import React from "react";
import classes from "./ComposeButton.module.css";
function ComposeButton() {
  return (
    <button className={classes.compose}>
      <span>+</span>
      <h4>Compose</h4>
    </button>
  );
}

export default ComposeButton;
