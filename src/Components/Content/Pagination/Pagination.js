import React, { useState } from "react";
import Email from "../Emails/Email";
import { useSelector } from "react-redux";

function Pagination({ data, dataLimit, currentPage,path }) {
  // const page = Math.round(data.length / dataLimit);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    const newData = Object.values(data);
    return newData.slice(startIndex, endIndex);
  };

  //   const obj = [goToNextPage, goToPreviousPage];
  return (
    <div>
      {getPaginatedData().map((d, i) => {
        return (
          <Email
            key={d.id}
            id={d.id}
            company={d.company_Name}
            description={d.description}
            subject={d.subject}
            time={d.time}
            path={path}
          />
        );
      })}
    </div>
  );
}

export default Pagination;
