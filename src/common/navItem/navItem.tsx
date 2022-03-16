import React, { CSSProperties, Fragment } from "react";
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
  const pathName = useLocation().pathname;

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

  function getClassName() {
    const activeClass = "flex hover-btn link-active";
    if (pathName === `/${path}`)
      switch (path) {
        case "inbox":
          return activeClass + " red";
        default:
          return activeClass;
      }
    else return "flex hover-btn";
  }

  return (
    <Fragment>
      <NavLink to={path} className="navlinks">
        <div className={getClassName()} style={navBoxStyle}>
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
