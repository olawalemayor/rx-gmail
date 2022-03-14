import React, { CSSProperties, Fragment, useEffect, useState } from "react";
import Checkbox from "../../common/checkbox";
import Dropdown from "../../common/dropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./checkDropdown.css";
import withTooltip from "../../common/withTooltip";

interface checkDropdownProps {
  onCheck: any;
  showTooltip: boolean;
}

function CheckDropdown({ onCheck, showTooltip }: checkDropdownProps) {
  const dropdownStyle: CSSProperties = {
    position: "relative",
  };

  const [menu, setMenu] = useState([""]);

  useEffect(() => {
    let menuItems = ["All", "None", "Read", "Unread", "Starred", "Unstarred"];
    setMenu([...menuItems]);
  }, [setMenu]);

  return (
    <Fragment>
      <div style={dropdownStyle} className="focus-bg">
        <button className="hover-btn checkbox" onClick={onCheck}>
          <Checkbox />
        </button>
        <button className="hover-btn dropdown">
          <Dropdown Component={() => <ArrowDropDownIcon />} Menu={menu} />
        </button>
      </div>
      {showTooltip && <div className="tooltip">Select</div>}
    </Fragment>
  );
}

export default withTooltip(CheckDropdown);
