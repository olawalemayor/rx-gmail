import React, { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";

const tip = "Search";

export default function SearchButton() {
  return (
    <Fragment>
      <button className="basic-search">
        <SearchIcon />
      </button>
    </Fragment>
  );
}
