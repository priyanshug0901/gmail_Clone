import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import snoozeReducer from "../../../redux/reducers/snoozeReducer";

function Snooze() {
  const email = useSelector((state) => state.searchReducer);
  const snoozeddId = useSelector((state) => state.snoozeReducer);
  const snoozedData = email.filter((val) => snoozeddId.includes(val.id));

  return (
    <div>
      <Pagination data={snoozedData} dataLimit={50} currentPage={1} path="/snoozed" />
    </div>
  );
}

export default Snooze;
