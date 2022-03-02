import React, { Fragment, useState } from "react";
import "./dropdown.css";

interface DropDownProps {
  Component: any;
  Menu: string[];
}

export default function Dropdown({ Component, Menu }: DropDownProps) {
  const [showMenu, setShowMenu] = useState(false);

  function renderBox() {
    return Menu.map((item) => <div key={item}>{item}</div>);
  }

  return (
    <Fragment>
      <div onClick={() => setShowMenu(!showMenu)}>
        {/* <ArrowDropDownIcon /> */}
        <Component />
      </div>
      <div className="menu-items">{showMenu && renderBox()}</div>
    </Fragment>
  );
}
