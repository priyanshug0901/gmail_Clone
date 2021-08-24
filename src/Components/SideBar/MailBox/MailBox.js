import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { send } from "../../../redux/action/send";
import ClearIcon from '@material-ui/icons/Clear';

import classes from "./MailBox.module.css";
function MailBox({hide}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textBox, setTextBox] = useState("");
  const sendersHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const textBoxHandler = (e) => {
    setTextBox(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let id = Date.now();
    let time = new Date().toLocaleDateString();
    dispatch(send(id, email, subject, textBox, time));
  };

  return (<div className={classes.form}>
    <header className={classes.mailBoxHeader}>
      <h2>New Message</h2>
      <ClearIcon onClick={hide}/>
    </header>
    <form className={classes.formArea} onSubmit={submitHandler}>
      <input
       className={classes.formItems}
        onChange={sendersHandler}
        type="text"
        value={email}
        placeholder="To :"
      />
      <input className={classes.formItems} onChange={subjectHandler} type="text" placeholder="Subject " />
      <textarea
      className={classes.textArea}
        onChange={textBoxHandler}
        // className={classes.description}
        type="textbox"
        placeholder="Description "
      />
      <button className={classes.formButton} onClick={submitHandler}>Send</button>
    </form>
    </div>
  );
}

export default MailBox;
