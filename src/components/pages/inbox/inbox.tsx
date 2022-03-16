import React, { Fragment, useEffect, useState } from "react";
import PageContext from "../../../context/pageContext";
import "./inbox.css";
import Toolbar from "../../topBar/toolbar";
import PageHeader from "../../pageHeader";
import MessageBox from "../../message/messageBox";
import PreMessageBox from "../../pre-messagebox";
import toNumberString from "../../../common/numberPipe";
import { getMessages } from "../../../assets/extra/messageService";
import MsgBoxContext from "../../../context/msgBoxContext";

export default function Inbox() {
  const [username, setUsername] = useState("");
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageLimit, setPageLimit] = useState<number>(0);
  const [totalItems, setTotlaItems] = useState<number>(0);
  const [tag, setTag] = useState<string>("");
  const [messages, setMessages] = useState([
    {
      sender: "",
      subject: "",
      description: "",
      time: "",
      id: "",
      status: "",
      tags: [""],
      message: {
        sender_email: "",
        body: "",
      },
    },
  ]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setUsername("olawalemayor");
    document.title = `Inbox (${toNumberString(messages.length)}) - ${username}`;
  }, [messages, setUsername, username]);

  useEffect(() => {
    setPageIndex(1);

    messages.length > 50 ? setPageIndex(50) : setPageLimit(messages.length);

    setTotlaItems(messages.length);
  }, [setPageIndex, setPageLimit, setTotlaItems, messages]);

  useEffect(() => {
    const Messages = [...getMessages()];
    setMessages(Messages);
  }, [setMessages]);

  function setCurrentTag(tag: string) {
    setTag(`${tag}`);
  }

  function getSortedMessages(tag: string) {
    let messages = [...getMessages()];
    return messages.filter((message) => message.tags.includes(tag));
  }

  function getUnreadMessages(tag: string) {
    let messages = [...getMessages()];
    return messages.filter(
      (message) => message.tags.includes(tag) && message.status === "unread"
    );
  }

  function sortTag(tag: string) {
    setCurrentTag(tag);
    setMessages(getSortedMessages(tag));
  }

  function showAllConvo() {
    console.log("Should show all conversations");
  }

  //sort to primary at startup
  if (messages.length === getMessages().length) sortTag("primary");

  return (
    <Fragment>
      <PageContext.Provider value={{ pageIndex, pageLimit, totalItems }}>
        <MsgBoxContext.Provider value={messages}>
          <Toolbar
            onCheck={() => setChecked(!checked)}
            isChecked={checked}
            messages={messages}
          ></Toolbar>
          {checked && (
            <PreMessageBox
              messages={messages}
              totalItems={totalItems}
              tag={tag}
              showAllConvo={showAllConvo}
            />
          )}
          <PageHeader sortTag={sortTag} getUnreadMessages={getUnreadMessages} />
          <MessageBox isChecked={checked} messages={messages} />
        </MsgBoxContext.Provider>
      </PageContext.Provider>
    </Fragment>
  );
}
