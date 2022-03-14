import React, { Fragment } from "react";
import withTooltip from "../../common/withTooltip";

interface IconBoxProps {
  icon: any;
  description: string;
  getIconClass: any;
  showTooltip: any;
}

function getTooltip(description: string, showTooltip: boolean) {
  if (showTooltip) {
    switch (description) {
      //header
      case "profile":
        return (
          <div className="tooltip absolute-right">
            <h4>Google Acount</h4>
            <p>User Name</p>
            <p>User Email</p>
          </div>
        );
      //Siderbar
      case "Calendar":
        return <div className="tooltip absolute-right">Calendar</div>;
      case "Keep":
        return <div className="tooltip">Keep</div>;
      case "Tasks":
        return <div className="tooltip">Tasks</div>;
      case "Contacts":
        return <div className="tooltip absolute-right">Contacts</div>;
      //topbar
      default:
        return;
    }
  }
}

function IconBox({
  icon,
  description,
  getIconClass,
  showTooltip,
}: IconBoxProps) {
  return (
    <Fragment>
      <div className={getIconClass()}>
        <img src={icon} alt={description} />
      </div>
      {getTooltip(description, showTooltip)}
    </Fragment>
  );
}

export default withTooltip(IconBox);
