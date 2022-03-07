import React, { useState, useEffect, CSSProperties } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { height } from "@mui/system";

interface checkboxProps {
  isChecked?: boolean;
}

export default function Checkbox({ isChecked }: checkboxProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isChecked) setChecked(true);
    else if (!isChecked) setChecked(false);
    else return;
  }, [isChecked, setChecked]);

  return (
    <div
      onClick={() => {
        setChecked(!checked);
      }}
    >
      {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
}
