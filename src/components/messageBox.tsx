import React, { Fragment } from "react";
import Message from "../models/message";
import MessageRow from "./messageRow";

interface MessageBoxProps {
  isChecked: boolean;
  messages: Message[];
}
export default function MessageBox({ isChecked, messages }: MessageBoxProps) {
  return (
    <Fragment>
      {messages.map(({ id, sender, subject, description, time, status }) => (
        <MessageRow
          key={id}
          sender={sender}
          subject={subject}
          description={description}
          time={time}
          isChecked={isChecked}
          status={status}
        />
      ))}
    </Fragment>
  );
}
