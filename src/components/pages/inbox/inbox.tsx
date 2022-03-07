import React, { Fragment, useEffect, useState } from "react";
import PageContext from "../../../context/pageContext";
import "./inbox.css";
import Toolbar from "../../topBar/toolbar";
import PageHeader from "../../pageHeader";
import Messages from "../../../assets/extra/messages.json";
import MessageBox from "../../messageBox";
import PreMessageBox from "../../pre-messagebox";

export default function Inbox() {
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
    setPageIndex(1);
    setPageLimit(50);
    setTotlaItems(5175);
  }, [setPageIndex, setPageLimit, setTotlaItems]);

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
        ></Toolbar>
        {checked && (
          <PreMessageBox
            messages={Message}
            totalItems={totalItems}
            tag={tag}
            showAllConvo={showAllConvo}
          />
        )}
        <PageHeader sortTag={sortTag} getMessages={getSortedMessages} />
        <MessageBox isChecked={checked} messages={Message} />
      </PageContext.Provider>
    </Fragment>
  );
}
