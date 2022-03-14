import React, { CSSProperties, useEffect, useState } from "react";
import Checkbox from "../common/checkbox";
import Starred from "../common/starred";

interface MessageRowProps {
  sender: string;
  subject: string;
  description: string;
  time: string;
  status: string;
  isChecked: boolean;
}

export default function MessageRow({
  sender,
  subject,
  description,
  time,
  status,
  isChecked,
}: MessageRowProps) {
  const [activeRow, setActiveRow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setActiveRow(isChecked);
  }, [isChecked]);

  function styleMessageRow(): CSSProperties {
    const defaultStyle: CSSProperties = {
      borderBottom: "1px solid #eee",
      cursor: "pointer",
      padding: "0 1rem",
      maxWidth: "1200px",
    };
    let dynamic: CSSProperties = activeRow
      ? { backgroundColor: "#c2dbff" }
      : {};
    return { ...defaultStyle, ...dynamic };
  }

  function getMessageRowClass(): string {
    const defaultClass = "flex";
    let dynamic = isHovered ? "hovered-row" : "";

    return `${defaultClass} ${dynamic}`;
  }

  function setHoverStyle() {
    setIsHovered(true);
  }

  function removeHoverStyle() {
    setIsHovered(false);
  }

  function unreadStyle(): string {
    let dynamicStyling: string = status === "unread" ? "unread-style" : "";
    return dynamicStyling;
  }

  function handleCheck() {
    setActiveRow(!activeRow);
  }

  const introduction: CSSProperties = {
    width: "250px",
    minWidth: "250px",
    placeItems: "center flex-start",
  };

  const details: CSSProperties = {
    flex: "0 0 auto",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "940px",
  };

  const topic: CSSProperties = {
    fontWeight: "bolder",
    display: "flex",
    alignItems: "center",
    flex: "1 0 auto",
    width: "700px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "1.5rem",
  };

  const summary: CSSProperties = {
    fontWeight: "lighter",
  };

  const styleTime: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  };

  return (
    <div
      className={getMessageRowClass()}
      style={styleMessageRow()}
      onMouseEnter={() => setHoverStyle()}
      onMouseLeave={() => removeHoverStyle()}
    >
      <div className="flex" style={introduction}>
        <div className="icons hover-btn" onClick={() => handleCheck()}>
          <Checkbox isChecked={isChecked} tip="Select" />
        </div>

        <div className="icons hover-btn">
          <Starred />
        </div>

        <div className={unreadStyle()}>
          {sender}{" "}
          {status === "unread" && <span className="new-badge">New!!!</span>}
        </div>
      </div>

      <div className="flex" style={details}>
        <div style={topic} className={unreadStyle()}>
          <div>{subject} - </div>

          <div style={summary} className={unreadStyle()}>
            {description}
          </div>
        </div>

        {!isHovered && <div style={styleTime}>{time}</div>}
      </div>
    </div>
  );
}
