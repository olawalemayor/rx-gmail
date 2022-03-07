import React, { CSSProperties, useEffect, useState } from "react";
import Checkbox from "../../common/checkbox";
import Dropdown from "../../common/dropdown";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./checkDropdown.css";

interface checkDropdownProps {
  onCheck: any;
}

export default function CheckDropdown({ onCheck }: checkDropdownProps) {
  const dropdownStyle: CSSProperties = {
    position: "relative",
  };

  const [menu, setMenu] = useState([""]);

  useEffect(() => {
    let menuItems = ["All", "None", "Read", "Unread", "Starred", "Unstarred"];
    setMenu([...menuItems]);
  }, [setMenu]);

  return (
    <div style={dropdownStyle} className="focus-bg">
      <button className="hover-btn checkbox" onClick={onCheck}>
        <Checkbox />
      </button>
      <button className="hover-btn dropdown">
        <Dropdown Component={() => <ArrowDropDownIcon />} Menu={menu} />
      </button>
    </div>
  );
}
