import React from "react";
import "./header.css";
import Toggler from "./toggler";
import logo from "../../assets/img/image 16.png";
import SearchBox from "./searchbox";
import Support from "./support";
import Settings from "./settings";
import Apps from "./apps";
import Profile from "./profile";

interface HeaderProps {
  handleNavExpansion: any;
}

export function Header({ handleNavExpansion }: HeaderProps) {
  return (
    <div className="header">
      {/*Toggler and brand*/}
      <div className="left-flex">
        <Toggler handleNavbarExpansion={handleNavExpansion} />

        <div className="brand">
          <img src={logo} alt="Gmail" />
        </div>
      </div>

      {/* Search box and settings */}
      <div className="center-flex">
        <div></div>
        <SearchBox />

        <div className="support-settings">
          <Support />
          <Settings />
        </div>
      </div>

      {/* apps and profile */}
      <div className="profile-apps">
        <Apps />
        <Profile />
      </div>
    </div>
  );
}
