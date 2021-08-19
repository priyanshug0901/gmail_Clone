import React from "react";
import classes from "./IconButton.module.css";

function IconButton(props) {
  return (
    <button className={classes.button}>
      <img src={props.src} alt={props.alt} />
    </button>
  );
}

export default IconButton;
