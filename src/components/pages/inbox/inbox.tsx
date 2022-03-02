import React, { Fragment, useEffect, useState } from "react";
import PageContext from "../../../context/pageContext";
import "./inbox.css";
import Toolbar from "./topBar/toolbar";

export default function Inbox() {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageLimit, setPageLimit] = useState<number>(0);
  const [totalItems, setTotlaItems] = useState<number>(0);

  useEffect(() => {
    setPageIndex(1);
    setPageLimit(50);
    setTotlaItems(5175);
  }, [setPageIndex, setPageLimit, setTotlaItems]);

  return (
    <Fragment>
      <PageContext.Provider value={{ pageIndex, pageLimit, totalItems }}>
        <Toolbar></Toolbar>
      </PageContext.Provider>
    </Fragment>
  );
}
