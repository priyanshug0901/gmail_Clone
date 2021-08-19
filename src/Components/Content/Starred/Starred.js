import React, { useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import classes from "./Starred.module.css";

function Starred() {
  const [currentPage, setCurrentPage] = useState(1);
  const goToNextPage = () => {
    return setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    return setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };
  //   const obj = {
  //     goToNextPage,
  //     goToPreviousPage,
  //   };
  const email = useSelector((state) => state.searchReducer);
  const starredId = useSelector((state) => state.starredReducer);
  const starredData = email.filter((val) => starredId.includes(val.id));

  // let starredData = [];
  // starredId.forEach((element) => {
  //   starredData.push(
  //     email.filter((val) => {
  //       return val.id === element;
  //     })[0]
  //   );
  // });

  console.log(starredData);
  return (
    <div>
      <Pagination data={starredData} dataLimit={50} currentPage={currentPage} />
    </div>
  );
}

export default Starred;
