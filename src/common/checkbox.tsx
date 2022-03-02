import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div
      onClick={() => {
        setIsChecked(!isChecked);
      }}
    >
      {isChecked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
}
