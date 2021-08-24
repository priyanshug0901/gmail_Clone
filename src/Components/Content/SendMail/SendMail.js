import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";

function SendMail() {
  const sentData = useSelector((state) => state.sentReducer);
  return (
    <div>
      <Pagination data={sentData} dataLimit={50} currentPage={1} path="/sent"/>
    </div>
  );
}

export default SendMail;
