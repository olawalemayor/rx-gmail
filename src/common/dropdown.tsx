import React, { Fragment, useEffect, useState } from "react";
import "./dropdown.css";

interface DropDownProps {
  Component: any;
  Menu: string[];
}

export default function Dropdown({ Component, Menu }: DropDownProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function renderBox() {
    return Menu.map((item) => <div key={item}>{item}</div>);
  }

  useEffect(() => {
    window.addEventListener("click", () => {
      setIsOpen(!isOpen);
    });
  }, [isOpen]);

  function displayDropdown() {
    setShowMenu(!showMenu);
    setIsOpen(true);
    console.log(showMenu, isOpen);
  }

  return (
    <Fragment>
      <div onClick={() => displayDropdown()}>
        {/* <ArrowDropDownIcon /> */}
        <Component />
      </div>
      <div className="menu-items">{showMenu && isOpen && renderBox()}</div>
    </Fragment>
  );
}
