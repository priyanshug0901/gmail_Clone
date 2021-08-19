import React from "react";
import classes from "./Navbar.module.css";
import glogo from "./Images/gmaillogo.png";
import menu from "./Images/menu.png";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "./IconButton/IconButton";
import doubt from "./Images/doubts-button.png";
import dot from "./Images/dots-menu.png";
import man from "./Images/man.png";

import setting from "./Images/settings.png";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.menuBrand}>
        <button>
          <img src={menu} alt="menu" />
        </button>
        <img src={glogo} alt="glogo" />
      </div>
      <SearchBar />
      <div className={classes.list}>
        <IconButton src={doubt} alt="doubt" />
        <IconButton src={setting} alt="setting" />
        <IconButton src={dot} alt="dot" />
        <IconButton src={man} alt="man" />
      </div>
    </div>
  );
}

export default Navbar;
