import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { send } from "../../../redux/action/send";

import classes from "./MailBox.module.css";
function MailBox() {
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

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        onChange={sendersHandler}
        type="text"
        value={email}
        placeholder="To :"
      />
      <input onChange={subjectHandler} type="text" placeholder="Subject " />
      <textarea
        onChange={textBoxHandler}
        className={classes.description}
        type="textbox"
        placeholder="Description "
      />
      <button onClick={submitHandler}>Send</button>
    </form>
  );
}

export default MailBox;
