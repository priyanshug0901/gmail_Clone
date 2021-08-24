import React, { useState } from "react";
import refresh from "../Images/refresh.png";
import more from "../Images/more.png";
import left from "../Images/left-arrow.png";
import right from "../Images/right-arrow.png";
import classes from "./HeadChecker.module.css";
import { usePageContext } from "../Content";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelIcon from "@material-ui/icons/Label";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMultiple } from "../../../redux/action/search";
import { emptySelected } from "../../../redux/action/mailSelectAct";

function HeadChecker() {
  const selectedMails = useSelector((state) => state.mailSelectRed);

  const notChecked = (
    <div className="navigate">
      <button>
        <img src={refresh} alt="refresh" />
      </button>
      <button>
        <img src={more} alt="more" />
      </button>
    </div>
  );
  const [checked, setCheckBox] = useState(notChecked);

  const navigate = (
    <div className="navigate">
      <ReportIcon />
      <ArchiveIcon />
      <DeleteIcon onClick={deleteMul} />
      <MarkunreadIcon />
      <WatchLaterIcon />
      <AssignmentTurnedInIcon />
      <CreateNewFolderIcon />
      <LabelIcon />
      <MoreVertIcon />
    </div>
  );

  function showIcons(e) {
    if (e.target.checked === true) {
      setCheckBox(navigate);
    } else {
      setCheckBox(notChecked);
    }
  }

  const dispatch = useDispatch();

  function deleteMul() {
    dispatch(deleteMultiple(selectedMails));
    dispatch(emptySelected());
  }

  const obj = usePageContext();
  return (
    <div className={classes.head}>
      <div className={classes.headchecker}>
        <input
          className={classes.checbox}
          type="checkbox"
          onClick={showIcons}
        />
        <div>{checked}</div>
      </div>
      <div className={classes.headchecker}>
        <button onClick={obj.goToPreviousPage}>
          <ArrowBackIosIcon className={classes.headSvg}/>
        </button>
        <button onClick={obj.goToNextPage}>
         <ArrowForwardIosIcon className={classes.headSvg}/>
        </button>
      </div>
    </div>
  );
}

export default HeadChecker;
