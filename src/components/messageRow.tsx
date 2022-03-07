import React, { CSSProperties } from "react";
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
  const messageRow: CSSProperties = { borderBottom: "1px solid #eee" };

  function unreadStyle(): string {
    let dynamicStyling: string = status === "unread" ? "unread-style" : "";
    return dynamicStyling;
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
    <div className="flex" style={messageRow}>
      <div className="flex" style={introduction}>
        <div className="">
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
        <div>{time}</div>
      </div>
    </div>
  );
}
