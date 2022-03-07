import React, { CSSProperties } from "react";
import ComposeIcon from "../assets/images/compose.png";

interface ComposeButtonProps {
  expand: boolean;
}

export default function ComposeButton({ expand }: ComposeButtonProps) {
  const composeButton: CSSProperties = {
    background: "white",
    cursor: "pointer",
    marginLeft: ".5rem",
    padding: ".7rem",
    border: "1px solid #eee",
    boxShadow: "var(--boxShadow)",
    borderRadius: "2rem",
  };

  const image: CSSProperties = {
    padding: "0 .5rem",
  };

  return (
    <button className="flex" style={composeButton}>
      <img src={ComposeIcon} style={image} alt="" />
      {expand && <span>Compose</span>}
    </button>
  );
}
