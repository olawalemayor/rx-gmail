import React, { CSSProperties, useEffect, useState } from "react";
import NavItem from "../../common/navItem/navItem";
import NavMenu from "../../assets/extra/links.json";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SendIcon from "@mui/icons-material/Send";
import DescriptionIcon from "@mui/icons-material/Description";

interface NavBarProps {
  navbarExpansion: boolean;
}

interface Links {
  path: string;
  title: string;
  notifications: number;
}

export function NavBar({ navbarExpansion }: NavBarProps) {
  const [links, setLinks] = useState([
    {
      path: "inbox",
      title: "Inbox",
      notifications: 4255,
    },
  ]);

  useEffect(() => {
    const links: Links[] = NavMenu;
    setLinks(links);
  }, [setLinks]);

  function navBar(): CSSProperties {
    const marginStyle: CSSProperties = {
      marginTop: "1rem",
    };
    let result: CSSProperties;
    if (navbarExpansion) result = { width: "256px" };
    else result = { width: "max-content" };
    return { ...marginStyle, ...result };
  }

  function renderIcon({ path }: any) {
    switch (path) {
      case "inbox":
        return <InboxIcon />;
      case "starred":
        return <StarIcon />;
      case "snoozed":
        return <AccessTimeFilledIcon />;
      case "sent":
        return <SendIcon />;
      case "drafts":
        return <DescriptionIcon />;

      default:
        break;
    }
  }

  return (
    <nav style={navBar()}>
      {links.map((link) => (
        <NavItem
          key={link.path}
          path={link.path}
          icon={renderIcon(link)}
          title={link.title}
          notiications={link.notifications}
          navbarExpansion={navbarExpansion}
        />
      ))}
    </nav>
  );
}
