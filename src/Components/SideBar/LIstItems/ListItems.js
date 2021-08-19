import React from "react";
import classes from "./ListItem.module.css";
import mail from "../Images/mail-inbox-app.png";
import star from "../Images/pointed-star.png";
import snooze from "../Images/snooze.png";
import sent from "../Images/right-arrow.png";
import draft from "../Images/notes.png";
import { Link } from "react-router-dom";
function ListItems() {
  return (
    <div className={classes.listItem}>
      <ul className={classes.ul}>
        <Link to="/">
          <li>
           
            <img src={mail} alt="mail" /> Inbox
          </li>
        </Link>
        <Link to="/starred">
          <li>
            
            <img src={star} alt="mail" /> Starred
          </li>
        </Link>
        <Link to="/snoozed">
          <li>
            {" "}
            <img src={snooze} alt="mail" /> Snoozed
          </li>
        </Link>
        <Link to="/sent">
          <li>
            {" "}
            <img src={sent} alt="mail" /> Sent
          </li>
        </Link>
        <Link to="/drafts">
          <li>
            {" "}
            <img src={draft} alt="mail" /> Drafts
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default ListItems;
