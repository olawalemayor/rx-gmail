import React, { CSSProperties } from "react";

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
      color: `#fff`,
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

  return (
    <div
      style={headerButtonStyle}
      className="hover-btn"
      onClick={() => handleSort(title.toLowerCase())}
    >
      <div style={headerButtonIcon}>{Icon}</div>
      <div>
        <div className="hb-top-row flex">
          <div>{title}</div>
          {badge && <div style={getBadgeStyle(badgeColor)}>{badge}</div>}
        </div>
        <div className="hb-bottom-row" style={previewStyle}>
          {preview}
        </div>
      </div>
    </div>
  );
}
