import React, { Fragment } from "react";
import AddIcon from "@mui/icons-material/Add";
import Iconbox from "./iconbox";
import calendar from "../../assets/icons/google-calendar.png";
import keep from "../../assets/icons/google-keep.png";
import tasks from "../../assets/icons/check.png";
import contacts from "../../assets/icons/contacts.png";

export function Sidebar() {
  function getIconClass(): string {
    const defaultClass = "hover-btn";
    let additionalClass = "sidebar-icons";
    return `${defaultClass} ${additionalClass}`;
  }

  return (
    <Fragment>
      <div className="sidebar">
        <div className="google-icons">
          <Iconbox
            icon={calendar}
            description={"Calendar"}
            getIconClass={getIconClass}
          />
          <Iconbox
            icon={keep}
            description={"Keep"}
            getIconClass={getIconClass}
          />
          <Iconbox
            icon={tasks}
            description={"Tasks"}
            getIconClass={getIconClass}
          />
          <Iconbox
            icon={contacts}
            description={"Contacts"}
            getIconClass={getIconClass}
          />
        </div>
        <div className={getIconClass()}>
          <AddIcon />
        </div>
      </div>
    </Fragment>
  );
}
