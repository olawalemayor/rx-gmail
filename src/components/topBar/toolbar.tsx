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

        {!isChecked && <TopIconButton Button={Icon.RefreshIcon} />}
        {!isChecked && (
          <div className="more-btn">
            <Dropdown
              Component={() => <TopIconButton Button={Icon.MoreVertIcon} />}
              Menu={more}
            />
          </div>
        )}

        {isChecked && <TopIconButton Button={Icon.ArchiveIcon} />}
        {isChecked && <TopIconButton Button={Icon.ReportIcon} />}
        {isChecked && <TopIconButton Button={Icon.DeleteIcon} />}
        {isChecked && <span className="divider"></span>}
        {isChecked && <TopIconButton Button={Icon.DraftsIcon} />}
        {isChecked && <TopIconButton Button={Icon.AccessTimeFilledIcon} />}
        {isChecked && <TopIconButton Button={Icon.AddTaskIcon} />}
        {isChecked && <span className="divider"></span>}
        {isChecked && <TopIconButton Button={Icon.DriveFileMoveIcon} />}
        {isChecked && <TopIconButton Button={Icon.LabelIcon} />}
      </div>
      <div className="flex pg-it">
        {messages.length > 0 && <Paginate />}
        <InputTools />
      </div>
    </div>
  );
}
