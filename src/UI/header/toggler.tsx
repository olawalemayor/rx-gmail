import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./toggler.css";

interface TogglerProps {
  handleNavbarExpansion: any;
}

export function Toggler({ handleNavbarExpansion }: TogglerProps) {
  return (
    <div className="toggler">
      <button onClick={handleNavbarExpansion}>
        <MenuIcon />
      </button>
    </div>
  );
}

export default Toggler;
