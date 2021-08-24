import React from "react";
import classes from "./ListItem.module.css";
import { Link } from "react-router-dom";
import { GrStar } from "react-icons/gr";
import { BiAlarmSnooze, BiSend } from "react-icons/bi";
import { RiDraftLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";






function ListItems() {

  const [color,setColor]=useState("black");
  const [fill,setFill]=useState("white");
  function handleClick(){
    setColor("red");
    setFill("red");
  }
  function handleClickOutside(){
    setColor("black");
    setFill("white");
  }


  return (
    <div className={classes.listItem}>
      <ul className={classes.ul}>
        
        <Link className={classes.sidebarContainer} to="/">

          <li className={classes.li} style={{color:color}} onClick={handleClick}>
           <HiOutlineMail style={{fill:fill}} onClick={handleClick} className={classes.svg} />Inbox
          </li>

        </Link>

        <Link onClick={handleClickOutside} className={classes.sidebarContainer} to="/starred">
          <li className={classes.li}>
            <GrStar className={classes.svg}/>Starred
          </li>
        </Link>

        <Link onClick={handleClickOutside} className={classes.sidebarContainer} to="/snoozed">
          <li className={classes.li}>
            <BiAlarmSnooze className={classes.svg}/>Snoozed
          </li>
        </Link>

        <Link onClick={handleClickOutside} className={classes.sidebarContainer} to="/sent">
          <li className={classes.li}>
            <BiSend className={classes.svg}/>Sent
          </li>
        </Link>

        <Link onClick={handleClickOutside} className={classes.sidebarContainer} to="/drafts">
          <li className={classes.li}>
            <RiDraftLine className={classes.svg}/> Drafts
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default ListItems;
