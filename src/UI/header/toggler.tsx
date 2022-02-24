import { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./toggler.css";

interface TogglerProps {}

interface TogglerState {}

class Toggler extends Component<TogglerProps, TogglerState> {
  //state = { :  }
  render() {
    return (
      <div className="toggler">
        <button>
          <MenuIcon />
        </button>
      </div>
    );
  }
}

export default Toggler;
