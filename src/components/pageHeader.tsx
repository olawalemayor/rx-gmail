import React, { CSSProperties } from "react";
import HeaderButton from "./headerbtn";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface PageHeaderProps {
  sortTag: any;
}
export default function PageHeader({ sortTag }: PageHeaderProps) {
  const pageHeaderStyle: CSSProperties = {
    display: "flex",
    borderBottom: "1px solid #eee",
  };

  return (
    <div style={pageHeaderStyle}>
      <HeaderButton Icon={<InboxIcon />} title="Primary" handleSort={sortTag} />
      <HeaderButton
        Icon={<GroupIcon />}
        title="Social"
        badge="44 new"
        badgeColor="blue"
        preview="LinkedIn, LinkedIn Learning, Fa..."
        handleSort={sortTag}
      />
      <HeaderButton
        Icon={<LocalOfferIcon />}
        title="Promotions"
        badge="46 new"
        badgeColor="green"
        preview="Netflix, Dribble, MongoDB Tea..."
        handleSort={sortTag}
      />
    </div>
  );
}
