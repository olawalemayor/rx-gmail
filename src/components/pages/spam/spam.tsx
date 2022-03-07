import React, { Fragment, useEffect, useState } from "react";
import Toolbar from "../../topBar/toolbar";
import PageContext from "../../../context/pageContext";
import Messages from "../../../assets/extra/messages.json";

export default function Spam() {
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
    setTotlaItems(600);
  }, [setPageIndex, setPageLimit, setTotlaItems]);

  useEffect(() => {
    setMessage(Messages);
  }, [setMessage]);

  return (
    <Fragment>
      <PageContext.Provider value={{ pageIndex, pageLimit, totalItems }}>
        <Toolbar
          onCheck={() => setChecked(!checked)}
          isChecked={checked}
        ></Toolbar>
      </PageContext.Provider>
    </Fragment>
  );
}
