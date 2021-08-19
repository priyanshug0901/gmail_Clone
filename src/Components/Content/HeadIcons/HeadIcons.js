import React from "react";
import classes from "./HeadIcons.module.css";
import mail from "../Images/mail-inbox-app.png";
import tag from "../Images/tag.png";
import user from "../Images/user.png";
function HeadIcons() {
  return (
    <div className={classes.container}>
      <button className={classes.btn}>
        <img src={mail} alt="mail" />
        <p>Primary</p>
      </button>
      <button className={classes.btn}>
        <img src={user} alt="user" />
        <p>Social</p>
      </button>
      <button className={classes.btn}>
        <img src={tag} alt="tag" />
        <p>Promotions</p>
      </button>
    </div>
  );
}

export default HeadIcons;
