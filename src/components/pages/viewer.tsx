import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMessage } from "../../assets/extra/messageService";
import Toolbar from "../topBar/toolbar";
import MsgHeader from "../msgHeader";

export default function Viewer() {
  const { messageId } = useParams();

  const [message, setMessage] = useState({
    id: "",
    sender: "",
    subject: "",
    description: "",
    time: "",
    tags: [""],
    status: "",
    message: {
      sender_email: "",
      body: "",
    },
  });

  useEffect(() => {
    const message = getMessage(messageId);
    if (message) setMessage({ ...message });
  }, [setMessage, messageId]);

  return (
    <div>
      <Toolbar messages={[message]} mode="single" />
      <MsgHeader message={message} />
    </div>
  );
}
