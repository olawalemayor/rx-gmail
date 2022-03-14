import React, { useEffect, useState } from "react";
import "./toolbar.css";
import CheckDropdown from "./checkDropdown";
import InputTools from "./inputTools";
import Paginate from "./paginate";
import TopIconButton from "./iconButton";
import * as Icon from "../../common/mat-icons";
import Dropdown from "../../common/dropdown";
import Message from "../../models/message";

interface ToolbarProps {
  onCheck: any;
  isChecked: boolean;
  messages: Message[];
}

export default function Toolbar({
  onCheck,
  isChecked,
  messages,
}: ToolbarProps) {
  const [more, setMore] = useState([""]);

  useEffect(() => {
    let moreItems = ["Mark all as read", "Select messages to see all actions"];
    setMore([...moreItems]);
  }, [setMore]);

  return (
    <div className="flex toolbar">
      <div className="flex toolbar-icons">
        <CheckDropdown onCheck={onCheck} />

        {!isChecked && (
          <TopIconButton Button={Icon.RefreshIcon} tip="Refresh" />
        )}
        {!isChecked && (
          <div className="more-btn">
            <Dropdown
              Component={() => (
                <TopIconButton Button={Icon.MoreVertIcon} tip="More" />
              )}
              Menu={more}
            />
          </div>
        )}

        {isChecked && <TopIconButton Button={Icon.ArchiveIcon} tip="Archive" />}
        {isChecked && (
          <TopIconButton Button={Icon.ReportIcon} tip="Report Spam" />
        )}
        {isChecked && <TopIconButton Button={Icon.DeleteIcon} tip="Delete" />}
        {isChecked && <span className="divider"></span>}
        {isChecked && (
          <TopIconButton Button={Icon.DraftsIcon} tip="Mark as read" />
        )}
        {isChecked && (
          <TopIconButton Button={Icon.AccessTimeFilledIcon} tip="Snooze" />
        )}
        {isChecked && (
          <TopIconButton Button={Icon.AddTaskIcon} tip="Add to tasks" />
        )}
        {isChecked && <span className="divider"></span>}
        {isChecked && (
          <TopIconButton Button={Icon.DriveFileMoveIcon} tip="Move to" />
        )}
        {isChecked && <TopIconButton Button={Icon.LabelIcon} tip="Labels" />}
      </div>
      <div className="flex pg-it">
        {messages.length > 0 && <Paginate />}
        <InputTools />
      </div>
    </div>
  );
}
