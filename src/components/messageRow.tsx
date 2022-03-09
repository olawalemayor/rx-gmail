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
    placeItems: "center flex-start",
  };

  const details: CSSProperties = {
    flex: "1 0 auto",
    justifyContent: "space-between",
  };

  const topic: CSSProperties = {
    fontWeight: "bolder",
  };
  const summary: CSSProperties = {
    fontWeight: "lighter",
  };

  return (
    <div
      className={getMessageRowClass()}
      style={styleMessageRow()}
      onMouseEnter={() => setHoverStyle()}
      onMouseLeave={() => removeHoverStyle()}
    >
      <div className="flex" style={introduction}>
        <div className="" onClick={() => handleCheck()}>
          <Checkbox isChecked={isChecked} />
        </div>
        <div className="">
          <Starred />
        </div>
        <div className={unreadStyle()}>
          {sender}{" "}
          {status === "unread" && <span className="new-badge">New!!!</span>}
        </div>
      </div>
      <div className="flex" style={details}>
        <div>
          <p style={topic} className={unreadStyle()}>
            {subject} -{" "}
            <span style={summary} className={unreadStyle()}>
              {description}
            </span>
          </p>
        </div>
        {!isHovered && <div>{time}</div>}
      </div>
    </div>
  );
}
