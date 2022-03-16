import React, { Fragment } from "react";
import TopIconButton from "../components/topBar/iconButton";
import { PrintIcon, OpenInNewIcon } from "../common/mat-icons";
import Message from "../models/message";

interface Props {
  message: Message;
}

export default function MsgHeader({ message }: Props) {
  return (
    <Fragment>
      <div className="msg-inner-header">
        <h2 className="msg-subject">{message.subject}</h2>
        <div className="msg-actions">
          <TopIconButton Button={PrintIcon} tip="Print all" />
          <TopIconButton Button={OpenInNewIcon} tip="In new window" />
        </div>
      </div>
    </Fragment>
  );
}
