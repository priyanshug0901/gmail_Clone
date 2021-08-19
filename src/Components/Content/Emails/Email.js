import React, { useState } from "react";
import { AiOutlineStar, AiFillDelete } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { IoArchive, IoMdMailUnread } from "react-icons/io";
import { BiAlarmSnooze } from "react-icons/bi";
import classes from "./Emails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addInToSnooze, removeIntoSnooze } from "../../../redux/action/snooze";
import { useHistory } from "react-router-dom";
import {
  addIdIntoStarred,
  removeIdIntoStarred
} from "../../../redux/action/starred";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import sendMessageData from "../../../redux/action/showMessage";
import { deleteMail } from "../../../redux/action/search";
import {
  addToSelected,
  remFromSelected
} from "../../../redux/action/mailSelectAct";

function Email({ id, company, description, subject, time }) {
  const history = useHistory();
  const [showOnHover, setShowOnHover] = useState(false);
  const [starColorShow, setStarColorShow] = useState(false);
  const [addSnooze, setAddSnooze] = useState(false);
  const dispatch = useDispatch();

  const handlingShowOnOver = (e) => {
    e.stopPropagation();
    setShowOnHover((prev) => (prev = true));
  };

  const handlingShowOnOut = (e) => {
    e.stopPropagation();
    setShowOnHover((prev) => (prev = false));
  };

  const starClick = (e) => {
    e.preventDefault();
    setStarColorShow((prev) => !prev);
    if (!starColorShow) {
      dispatch(addIdIntoStarred(id));
    } else if (starColorShow) {
      dispatch(removeIdIntoStarred(id));
    }
  };

  const snoozeHandler = (e) => {
    setAddSnooze(!addSnooze);
    if (!addSnooze) {
      console.log("run");
      dispatch(addInToSnooze(id));
    } else if (addSnooze) {
      console.log("run1");
      dispatch(removeIntoSnooze(id));
    }
  };

  function showMail(e) {
    dispatch(sendMessageData(id, company, description, subject, time));
    history.push("/mail");
  }

  function handleDelete() {
    dispatch(deleteMail(id));
  }

  function selectBox(e) {
    if (e.target.checked) {
      dispatch(addToSelected(id));
    } else {
      dispatch(remFromSelected(id));
    }
  }

  return (
    <React.Fragment>
      <div
        // onMouseIn={handlingShowOnOver}
        onMouseOver={handlingShowOnOver}
        onMouseOut={handlingShowOnOut}
        className={classes.list}
      >
        <div className={classes.check}>
          <input type="checkbox" onClick={selectBox} />
          <button type="button" className={classes.button} onClick={starClick}>
            <AiOutlineStar
              className={starColorShow ? classes.svgStar : classes.svg}
            />
          </button>
          <button className={classes.button}>
            <BiMailSend className={classes.svg} />
          </button>
        </div>
        <div className={classes.company}>
          <div className={classes.middle} onClick={showMail}>
            <h3>{company}</h3>
            <h4>{description}</h4>
          </div>
          {showOnHover ? (
            <div className={classes.hideIcons}>
              <button>
                <IoMdMailUnread />
              </button>
              <button onClick={snoozeHandler}>
                <AccessAlarmIcon />
              </button>
              <button onClick={handleDelete}>
                <AiFillDelete />
              </button>
            </div>
          ) : (
            <p>{time}</p>
          )}
        </div>
      </div>
      <hr className={classes.hr} />
    </React.Fragment>
  );
}

export default Email;
