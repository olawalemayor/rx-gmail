import React from "react";

interface IconBoxProps {
  icon: any;
  description: string;
  getIconClass: any;
}

export default function ({ icon, description, getIconClass }: IconBoxProps) {
  return (
    <div className={getIconClass()}>
      <img src={icon} alt={description} />
    </div>
  );
}
