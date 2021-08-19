import React from "react";
import classes from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import search from "../Images/search.png";
import { dataReset, searchResult } from "../../../redux/action/search";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const gatherSearchData = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  const handlingSearch = (e) => {
    e.preventDefault();
    if (searchText.length === 0) {
      // console.log("lkdl");
      dispatch(dataReset());
    } else {
      dispatch(searchResult(searchText));
    }
  };
  // console.log(searchText);
  return (
    <form onSubmit={handlingSearch} className={classes.form}>
      <div className={classes.search}>
        <img className={classes.searchIcon} src={search} alt="search" />
        <input
          onke
          value={searchText}
          onChange={gatherSearchData}
          className={classes.input}
          type="text"
        />
      </div>
    </form>
  );
}

export default SearchBar;
