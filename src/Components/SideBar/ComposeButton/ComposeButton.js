import React,{useState} from "react";
import MailBox from "../MailBox/MailBox";
import classes from "./ComposeButton.module.css";

function ComposeButton() {
  const [mailBox,setMailBox]=useState(false);
 
  function showMailBox(){
    setMailBox(true);
  }
  function hideMailBox(){
    setMailBox(false);
  }
  return (
  <div >
    <button className={classes.compose} onClick={showMailBox} >
      <img src='https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png' />
      <h3>Compose</h3>
    </button>
    {mailBox && <MailBox hide={hideMailBox}/>}
    </div>
  );
}

export default ComposeButton;
