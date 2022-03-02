import React from "react";

interface PageInfo {
  pageIndex: number;
  pageLimit: number;
  totalItems: number;
}

const PageContext = React.createContext<PageInfo>({
  pageIndex: 0,
  pageLimit: 0,
  totalItems: 0,
});
PageContext.displayName = "PageContext";

export default PageContext;
