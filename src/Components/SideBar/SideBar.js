import React from "react";
import ComposeButton from "./ComposeButton/ComposeButton";
import ListItems from "./LIstItems/ListItems";
import classes from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <ComposeButton />
      <ListItems />
    </div>
  );
}

export default SideBar;
