import React, { Fragment, useEffect, useState } from "react";
import PageContext from "../../../context/pageContext";
import "./inbox.css";
import Toolbar from "../../topBar/toolbar";
import PageHeader from "../../pageHeader";
import Messages from "../../../assets/extra/messages.json";
import MessageBox from "../../messageBox";
import Message from "../../../models/message";

export default function Inbox() {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageLimit, setPageLimit] = useState<number>(0);
  const [totalItems, setTotlaItems] = useState<number>(0);
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
  }, [setMessage, Messages]);

  function sortTag(tag: string) {
    let messages = [...Messages];
    let sortedMessages = messages.filter((message) =>
      message.tags.includes(tag)
    );
    setMessage(sortedMessages);
  }

  return (
    <Fragment>
      <PageContext.Provider value={{ pageIndex, pageLimit, totalItems }}>
        <Toolbar
          onCheck={() => setChecked(!checked)}
          isChecked={checked}
        ></Toolbar>
        <PageHeader sortTag={sortTag} />
        <MessageBox isChecked={checked} messages={Message} />
      </PageContext.Provider>
    </Fragment>
  );
}