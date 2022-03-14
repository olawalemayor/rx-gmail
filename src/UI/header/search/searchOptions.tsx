import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import withTooltip from "../../../common/withTooltip";

interface SearchOptionsProps {
  showTooltip: boolean;
}

function SearchOptions({ showTooltip }: SearchOptionsProps) {
  return (
    <button className="advanced-search">
      <ManageSearchIcon />
      {showTooltip && <div className="tooltip">Show search options</div>}
    </button>
  );
}

export default withTooltip(SearchOptions);
