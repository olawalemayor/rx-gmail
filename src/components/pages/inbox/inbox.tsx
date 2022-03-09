import React, { Fragment, useEffect, useState } from "react";
import PageContext from "../../../context/pageContext";
import "./inbox.css";
import Toolbar from "../../topBar/toolbar";
import PageHeader from "../../pageHeader";
import Messages from "../../../assets/extra/messages.json";
import MessageBox from "../../messageBox";
import PreMessageBox from "../../pre-messagebox";
import InboxContext from "../../../context/inboxContext";
import toNumberString from "../../../common/numberPipe";

export default function Inbox() {
  const [username, setUsername] = useState("");
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageLimit, setPageLimit] = useState<number>(0);
  const [totalItems, setTotlaItems] = useState<number>(0);
  const [tag, setTag] = useState<string>("");
  const [Message, setMessage] = useState([
    {
      sender: "",
      subject: "",
      description: "",
      time: "",
      id: "",
      status: "",
      tags: [""],
    },
  ]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setUsername("olawalemayor");
    document.title = `Inbox (${toNumberString(Message.length)}) - ${username}`;
  }, [toNumberString, Message, setUsername]);

  useEffect(() => {
    setPageIndex(1);

    Message.length > 50 ? setPageIndex(50) : setPageLimit(Message.length);

    setTotlaItems(Message.length);
  }, [setPageIndex, setPageLimit, setTotlaItems, Message]);

  useEffect(() => {
    setMessage(Messages);
  }, [setMessage]);

  setTimeout(() => {
    if (Message.length === Messages.length) sortTag("primary");
  }, 1500);

  function setCurrentTag(tag: string) {
    setTag(`${tag}`);
  }

  function getSortedMessages(tag: string) {
    let messages = [...Messages];
    return messages.filter((message) => message.tags.includes(tag));
  }

  function getUnreadMessages(tag: string) {
    let messages = [...Messages];
    return messages.filter(
      (message) => message.tags.includes(tag) && message.status === "unread"
    );
  }

  function sortTag(tag: string) {
    setCurrentTag(tag);
    setMessage(getSortedMessages(tag));
  }

  function showAllConvo() {
    console.log("Should show all conversations");
  }

  return (
    <Fragment>
      <PageContext.Provider value={{ pageIndex, pageLimit, totalItems }}>
        <Toolbar
          onCheck={() => setChecked(!checked)}
          isChecked={checked}
          messages={Message}
        ></Toolbar>
        {checked && (
          <PreMessageBox
            messages={Message}
            totalItems={totalItems}
            tag={tag}
            showAllConvo={showAllConvo}
          />
        )}
        <PageHeader
          sortTag={sortTag}
          getMessages={getSortedMessages}
          getUnreadMessages={getUnreadMessages}
        />
        <MessageBox isChecked={checked} messages={Message} />
      </PageContext.Provider>
    </Fragment>
  );
}
