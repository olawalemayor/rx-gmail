import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./toggler.css";
import withTooltip from "../../common/withTooltip";

interface TogglerProps {
  handleNavbarExpansion: any;
  showTooltip?: any;
}

export function Toggler({ handleNavbarExpansion, showTooltip }: TogglerProps) {
  return (
    <div className="toggler">
      <button onClick={handleNavbarExpansion}>
        <MenuIcon />
      </button>
      {showTooltip && <div className="tooltip">Main menu</div>}
    </div>
  );
}

export default withTooltip(Toggler);
