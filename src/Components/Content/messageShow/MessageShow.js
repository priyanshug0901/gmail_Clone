import { React } from "react";
import "./messageShow.css";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelIcon from "@material-ui/icons/Label";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Message(props) {
  const history = useHistory();

  const mailData = useSelector((state) => state.showMessage);
  // console.log(mailData);
  function navigateBack() {
    history.push("/");
  }

  const navigate = (
    <div className="navigate">
      <button onClick={navigateBack}>
        <ArrowBackIcon className="navigate_back" />
      </button>
      <ReportIcon />
      <ArchiveIcon />
      <DeleteIcon />
      <MarkunreadIcon />
      <WatchLaterIcon />
      <AssignmentTurnedInIcon />
      <CreateNewFolderIcon />
      <LabelIcon />
      <MoreVertIcon />
    </div>
  );

  return (
    <div>
      {navigate}
      <h2 className="sender">{mailData.company_Name}</h2>
      <LabelIcon className="label" />
      <h5 className="subject">{mailData.description}</h5>
      <p className="description">{mailData.subject}</p>
    </div>
  );
}
