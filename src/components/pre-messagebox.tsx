import React from "react";
import toNumberString from "../common/numberPipe";
import Message from "../models/message";
interface PreMsgBoxProps {
  messages: Message[];
  totalItems: number;
  tag: string;
  showAllConvo: any;
}

export default function PreMessageBox({
  messages,
  totalItems,
  tag,
  showAllConvo,
}: PreMsgBoxProps) {
  return (
    <div>
      <p>
        All {messages.length} conversations on this page are selected.{" "}
        <span onClick={() => showAllConvo()}>
          Select all {toNumberString(totalItems)} conversations in {tag}
        </span>
      </p>
    </div>
  );
}
