import React, { CSSProperties } from "react";
import MsgBoxContext from "../context/msgBoxContext";
import Message from "../models/message";

interface HeaderButtonProps {
  Icon: any;
  title: string;
  badge?: string;
  badgeColor?: string;
  preview?: string;
  handleSort: any;
}

export default function HeaderButton({
  Icon,
  title,
  badge,
  badgeColor,
  preview,
  handleSort,
}: HeaderButtonProps) {
  function getBadgeStyle(color: any): CSSProperties {
    return {
      color: `#fff !important`,
      backgroundColor: `${color}`,
      padding: "0 .2rem",
      marginLeft: "5px",
      fontSize: "12px",
      borderRadius: "10px",
    };
  }

  const headerButtonStyle: CSSProperties = {
    width: "250px",
    display: "flex",
    alignItems: "center",
    padding: ".3rem 0",
  };

  const headerButtonIcon: CSSProperties = {
    padding: "0 1rem 0 .5rem",
  };

  const previewStyle: CSSProperties = {
    fontSize: "12px",
  };

  const activeClass = (messages: Message[], tag: string) => {
    const isIncluded = messages.some((m) => m.tags.includes(tag));
    const styleClass = "header-btn hover-btn";

    switch (tag) {
      case "primary":
        return isIncluded ? styleClass + " red" : styleClass;
      case "social":
        return isIncluded ? styleClass + " blue" : styleClass;
      case "promotions":
        return isIncluded ? styleClass + " green" : styleClass;
      default:
        return styleClass;
    }
  };

  return (
    <MsgBoxContext.Consumer>
      {(msgBoxContext) => (
        <div
          style={headerButtonStyle}
          className={activeClass(msgBoxContext, title.toLowerCase())}
          onClick={() => handleSort(title.toLowerCase())}
        >
          <div style={headerButtonIcon}>{Icon}</div>
          <div>
            <div className="hb-top-row flex">
              <div>{title}</div>
              {badge && (
                <div style={getBadgeStyle(badgeColor)} className="header-badge">
                  {badge}
                </div>
              )}
            </div>
            <div className="hb-bottom-row" style={previewStyle}>
              {preview}
            </div>
          </div>
        </div>
      )}
    </MsgBoxContext.Consumer>
  );
}
