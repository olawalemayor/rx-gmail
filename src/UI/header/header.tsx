import { FunctionComponent } from "react";
import "./header.css";
import Toggler from "./toggler";
import logo from "../../assets/svg/gmail-2476484.svg";
import SearchBox from "./searchbox";
import Support from "./support";
import Settings from "./settings";
import Apps from "./apps";
import Profile from "./profile";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <div className="header">
      {/*Toggler and brand*/}
      <div className="left-flex">
        <Toggler />

        <div className="brand">
          <img src={logo} alt="Gmail" />
          Gmail
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
};

export default Header;
