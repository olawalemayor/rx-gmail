import React, { CSSProperties, Fragment, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import toNumberString from "../numberPipe";
import withTooltip from "../withTooltip";

interface NavItemProps {
  icon: any;
  title: string;
  navbarExpansion: boolean;
  notiications: number;
  path: string;
  showTooltip: boolean;
}
function NavItem({
  icon,
  title,
  notiications,
  navbarExpansion,
  path,
  showTooltip,
}: NavItemProps) {
  const [isActive, setisActive] = useState(false);
  const [activeColor, setActiveColor] = useState("");

  const pathName = useLocation().pathname;

  function setPathStatus() {
    console.log(`/${path}`, "is equal to", pathName);
    if (`/${path}` === pathName) setisActive(true);
  }

  function setActivePathColor() {
    switch (path) {
      case "inbox":
        setActiveColor("red");
        break;

      default:
        break;
    }
  }

  const navBoxStyle: CSSProperties = {
    flex: "1 0 auto",
    width: "70%",
    borderBottomRightRadius: "30px",
    borderTopRightRadius: "30px",
    padding: ".3rem",
  };

  function getIconStyle(): CSSProperties {
    const buttonStyle: CSSProperties = {
      padding: "0 1rem",
    };

    let dynamic: CSSProperties = {};
    if (!navbarExpansion) dynamic = {};
    else dynamic = {};

    return { ...buttonStyle, ...dynamic };
  }

  const main: CSSProperties = {
    justifyContent: "space-between",
    width: "100%",
  };

  function getContainerStyle(): CSSProperties {
    let result: CSSProperties = {};
    const navStyle: CSSProperties = {
      textDecoration: "none",
    };

    if (isActive)
      result = {
        color: activeColor,
      };
    else {
      result = { color: "#777" };
    }

    return { ...result, ...navStyle };
  }

  return (
    <Fragment>
      <NavLink to={path} style={getContainerStyle}>
        <div className="flex hover-btn" style={navBoxStyle}>
          <div style={getIconStyle()}>{icon}</div>
          <div className="flex" style={main}>
            {navbarExpansion && <div>{title}</div>}
            {notiications > 0 && <div>{toNumberString(notiications)}</div>}
          </div>
        </div>
        {showTooltip && <div className="tooltip absolute-right">{title}</div>}
      </NavLink>
    </Fragment>
  );
}

export default withTooltip(NavItem);
