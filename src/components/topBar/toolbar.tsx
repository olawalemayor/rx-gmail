import React, { useEffect, useState } from "react";
import "./toolbar.css";
import CheckDropdown from "./checkDropdown";
import InputTools from "./inputTools";
import Paginate from "./paginate";
import TopIconButton from "./iconButton";
import * as Icon from "../../common/mat-icons";
import Dropdown from "../../common/dropdown";
import Message from "../../models/message";
import { useNavigate } from "react-router-dom";

interface ToolbarProps {
  onCheck?: any;
  isChecked?: boolean;
  messages: Message[];
  mode?: string;
}

export default function Toolbar({
  onCheck,
  isChecked,
  messages,
  mode,
}: ToolbarProps) {
  const [more, setMore] = useState([""]);
  const navigate = useNavigate();

  useEffect(() => {
    let moreItems = ["Mark all as read", "Select messages to see all actions"];
    setMore([...moreItems]);
  }, [setMore]);

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="flex toolbar">
      <div className="flex toolbar-icons">
        {mode !== "single" && <CheckDropdown onCheck={onCheck} />}

        {!isChecked && mode !== "single" && (
          <TopIconButton Button={Icon.RefreshIcon} tip="Refresh" />
        )}

        {mode === "single" && (
          <TopIconButton
            Button={Icon.ArrowBackIcon}
            tip="Back"
            action={goBack}
          />
        )}

        {(isChecked || mode === "single") && (
          <TopIconButton Button={Icon.ArchiveIcon} tip="Archive" />
        )}
        {(isChecked || mode === "single") && (
          <TopIconButton Button={Icon.ReportIcon} tip="Report Spam" />
        )}
        {(isChecked || mode === "single") && (
          <TopIconButton Button={Icon.DeleteIcon} tip="Delete" />
        )}
        {(isChecked || mode === "single") && <span className="divider"></span>}
        {(isChecked || mode === "single") && (
          <TopIconButton Button={Icon.DraftsIcon} tip="Mark as read" />
        )}
        {(isChecked || mode === "single") && (
          <TopIconButton Button={Icon.AccessTimeFilledIcon} tip="Snooze" />
        )}
        {(isChecked || mode === "single") && (
          <TopIconButton Button={Icon.AddTaskIcon} tip="Add to tasks" />
        )}
        {(isChecked || mode === "single") && <span className="divider"></span>}
        {(isChecked || mode === "single") && (
          <TopIconButton Button={Icon.DriveFileMoveIcon} tip="Move to" />
        )}
        {(isChecked || mode === "single") && (
          <TopIconButton Button={Icon.LabelIcon} tip="Labels" />
        )}

        <div className="more-btn">
          <Dropdown
            Component={() => (
              <TopIconButton Button={Icon.MoreVertIcon} tip="More" />
            )}
            Menu={more}
          />
        </div>
      </div>
      <div className="flex pg-it">
        {mode !== "single" && messages.length > 0 && <Paginate />}
        <InputTools />
      </div>
    </div>
  );
}
