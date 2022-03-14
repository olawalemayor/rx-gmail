import React, { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import withTooltip from "../../../common/withTooltip";

interface SearchButtonProps {
  showTooltip: boolean;
}

function SearchButton({ showTooltip }: SearchButtonProps) {
  return (
    <Fragment>
      <button className="basic-search">
        <SearchIcon />
      </button>
      {showTooltip && <div className="tooltip">Search</div>}
    </Fragment>
  );
}

export default withTooltip(SearchButton);
