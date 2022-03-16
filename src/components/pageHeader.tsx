import React, { CSSProperties } from "react";
import HeaderButton from "./headerbtn";
import InboxIcon from "@mui/icons-material/Inbox";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

interface PageHeaderProps {
  sortTag: any;
  getUnreadMessages: any;
}
export default function PageHeader({
  sortTag,
  getUnreadMessages,
}: PageHeaderProps) {
  const pageHeaderStyle: CSSProperties = {
    display: "flex",
    borderBottom: "1px solid #eee",
  };

  function getNotificationSize(tag: string) {
    const notificationSize = getUnreadMessages(tag).length;
    return notificationSize ? `${notificationSize} new` : "";
  }

  return (
    <div style={pageHeaderStyle}>
      <HeaderButton
        Icon={<InboxIcon />}
        title="Primary"
        handleSort={sortTag}
        badge={getNotificationSize("primary")}
        badgeColor="red"
      />
      <HeaderButton
        Icon={<GroupIcon />}
        title="Social"
        badge={getNotificationSize("social")}
        badgeColor="blue"
        preview="LinkedIn, LinkedIn Learning, Fa..."
        handleSort={sortTag}
      />
      <HeaderButton
        Icon={<LocalOfferIcon />}
        title="Promotions"
        badge={getNotificationSize("promotions")}
        badgeColor="green"
        preview="Netflix, Dribble, MongoDB Tea..."
        handleSort={sortTag}
      />
    </div>
  );
}
