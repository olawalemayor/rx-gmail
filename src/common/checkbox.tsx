import React, { useState, useEffect, Fragment } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import withTooltip from "./withTooltip";

interface checkboxProps {
  isChecked?: boolean;
  showTooltip: boolean;
  tip?: string;
}

function Checkbox({ isChecked, tip, showTooltip }: checkboxProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isChecked) setChecked(true);
    else if (!isChecked) setChecked(false);
    else return;
  }, [isChecked, setChecked]);

  return (
    <Fragment>
      <div
        onClick={() => {
          setChecked(!checked);
        }}
      >
        {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </div>
      {showTooltip && tip && <div className="tooltip">{tip}</div>}
    </Fragment>
  );
}

export default withTooltip(Checkbox);
