import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

interface NavBarProps {}

export const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="inbox">Inbox</NavLink>
        </li>
      </ul>
    </nav>
  );
};
